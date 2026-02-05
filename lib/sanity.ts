import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || 'production';

export const sanityEnabled = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId: projectId || 'missing',
  dataset,
  apiVersion: '2024-02-05',
  useCdn: true
});

export async function fetchSanity<T>(query: string): Promise<T | null> {
  if (!sanityEnabled) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query);
  } catch (error) {
    console.error('Sanity fetch failed', error);
    return null;
  }
}
