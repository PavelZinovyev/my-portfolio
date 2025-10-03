export const runtime = 'edge';
export async function GET() {
  const scriptId = process.env.VITE_GOOGLE_SCRIPT_ID;
  const url = `https://script.google.com/macros/s/${scriptId}/exec`;

  await fetch(url);
  return new Response(null, { status: 200 });
}
