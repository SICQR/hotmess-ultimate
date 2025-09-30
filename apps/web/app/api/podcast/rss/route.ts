import { NextResponse } from 'next/server'

export async function GET(){
  const site = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  // TODO: Implement database integration for episodes
  // const eps = await prisma.episode.findMany({ orderBy:{ publishedAt: 'desc' }, take: 50 })
  const eps: Array<{ id: string; title: string; slug: string; publishedAt: Date }> = []
  
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
