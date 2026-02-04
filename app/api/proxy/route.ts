import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');
    if (!url) return NextResponse.json({ error: 'missing url' }, { status: 400 });

    let target: URL;
    try {
      target = new URL(url);
    } catch (err) {
      return NextResponse.json({ error: 'invalid url' }, { status: 400 });
    }

    if (!['http:', 'https:'].includes(target.protocol)) {
      return NextResponse.json({ error: 'invalid protocol' }, { status: 400 });
    }

    // Fetch the remote page
    const res = await fetch(target.toString(), {
      // pass a reasonable user-agent
      headers: { 'User-Agent': 'Aussie-Digital-Preview-Proxy/1.0' },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'failed to fetch target' }, { status: 502 });
    }

    const text = await res.text();

    // Inject a <base> tag to make relative URLs resolve to the remote origin
    const baseTag = `<base href="${target.origin}" />`;
    let modified = text.replace(/<head( [^>]*)?>/i, (m) => `${m}\n${baseTag}`);

    // Remove any meta Content-Security-Policy tags that might prevent embedding
    modified = modified.replace(/<meta[^>]+http-equiv=["']Content-Security-Policy["'][^>]*>/gi, '');
    // Note: We don't forward CSP or X-Frame-Options headers from the remote site since we're serving the HTML ourselves.

    return new Response(modified, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (err) {
    console.error('proxy error', err);
    return NextResponse.json({ error: 'internal' }, { status: 500 });
  }
}
