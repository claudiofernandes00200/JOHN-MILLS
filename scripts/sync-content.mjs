import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const repo = process.env.CONTENT_REPO;
const token = process.env.CONTENT_TOKEN;
const branch = process.env.CONTENT_BRANCH || 'main';

if (!repo) {
  console.log('[sync-content] CONTENT_REPO not set. Skipping content sync.');
  process.exit(0);
}

if (!token) {
  console.log('[sync-content] CONTENT_TOKEN not set. Skipping content sync.');
  process.exit(0);
}

const tempDir = path.join(projectRoot, '.content-tmp');
const contentDir = path.join(projectRoot, 'content');
const uploadsDir = path.join(projectRoot, 'public', 'uploads');

const repoUrl = repo.startsWith('http')
  ? repo.replace('https://', `https://${token}@`)
  : `https://${token}@github.com/${repo}.git`;

async function removeIfExists(target) {
  try {
    await fs.rm(target, { recursive: true, force: true });
  } catch {
    // ignore
  }
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function sync() {
  console.log('[sync-content] Fetching content repository...');
  await removeIfExists(tempDir);
  await execFileAsync('git', ['clone', '--depth', '1', '--branch', branch, repoUrl, tempDir], {
    cwd: projectRoot
  });

  const tempContent = path.join(tempDir, 'content');
  const tempUploads = path.join(tempDir, 'public', 'uploads');

  await removeIfExists(contentDir);
  await removeIfExists(uploadsDir);

  await copyDir(tempContent, contentDir);

  try {
    await copyDir(tempUploads, uploadsDir);
  } catch {
    console.log('[sync-content] No uploads folder found in content repo.');
  }

  await removeIfExists(tempDir);
  console.log('[sync-content] Content sync complete.');
}

sync().catch((error) => {
  console.error('[sync-content] Failed:', error);
  process.exit(1);
});
