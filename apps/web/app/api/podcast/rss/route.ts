import { NextResponse } from 'next/server'

export async function GET(){
  const site = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  // Mock episodes data since prisma is not set up
  const eps = [
    {
      id: '1',
      title: 'HOTMESS Radio Episode 1',
      slug: 'episode-1',
      publishedAt: new Date()
    }
  ];
  
  const items = eps.map(e => `
    <item>
      <title><![CDATA[${e.title}]]></title>
      <link>${site}/radio/episodes/${e.slug}</link>
      <guid isPermaLink="false">${e.id}</guid>
      <pubDate>${(e.publishedAt||new Date()).toUTCString()}</pubDate>
      <description><![CDATA[${e.title} — HOTMESS Radio]]></description>
    </item>
  `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>HOTMESS Radio</title>
    <link>${site}/radio</link>
    <description>Clean lines. Dirty energy.</description>
    ${items}
  </channel>
</rss>`
  return new NextResponse(xml, { headers: { 'Content-Type': 'application/rss+xml' } })
}
