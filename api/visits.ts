export const runtime = 'edge';

export async function GET() {
  const scriptId = process.env.VITE_GOOGLE_SCRIPT_ID;
  const url = `https://script.google.com/macros/s/${scriptId}/exec`;

  const resp = await fetch(url);
  const text = await resp.text();

  return new Response(text, {
    status: resp.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}
