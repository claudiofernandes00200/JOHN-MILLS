// Cloudflare Pages Function: /api/callback
export async function onRequest(context) {
  const { request, env } = context;
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET', { status: 500 });
  }

  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    if (!code) {
      return new Response('Missing code', { status: 400 });
    }

    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code
      })
    });

    const tokenPayload = await tokenRes.json();

    if (!tokenRes.ok || !tokenPayload?.access_token) {
      return new Response(JSON.stringify(tokenPayload), { status: 400 });
    }

    const body = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <script>
            (function() {
              function receiveMessage(e) {
                if (e.data === 'authorizing:github') {
                  window.removeEventListener('message', receiveMessage, false);
                  window.opener.postMessage(
                    'authorization:github:${tokenPayload.access_token}',
                    e.origin
                  );
                }
              }
              window.addEventListener('message', receiveMessage, false);
              window.opener.postMessage('authorizing:github', '*');
            })();
          </script>
        </body>
      </html>
    `;

    return new Response(body, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  } catch (err) {
    return new Response(String(err?.message || err), { status: 500 });
  }
}
