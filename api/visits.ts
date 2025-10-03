import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const scriptId = process.env.GOOGLE_SCRIPT_ID;
  const url = `https://script.google.com/macros/s/${scriptId}/exec`;

  await fetch(url);
  res.statusCode = 200;
  res.end('OK');
}
