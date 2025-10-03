import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const scriptId = process.env.VITE_GOOGLE_SCRIPT_ID;
    if (!scriptId) {
      res.statusCode = 500;
      res.end('script id was not set');
      return;
    }

    const url = `https://script.google.com/macros/s/${scriptId}/exec`;
    await fetch(url);

    res.statusCode = 200;
    res.end();
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end();
  }
}
