import { NextResponse } from 'next/server';

// Required for static export
export const dynamic = 'force-static';

export async function GET() {
  // Basic RSS feed structure
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Turicks Blog</title>
    <link>https://turicks.com/blog</link>
    <description>Latest updates and insights from Turicks</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://turicks.com/blog/rss.xml" rel="self" type="application/rss+xml"/>
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
