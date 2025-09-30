import fs from 'node:fs'
import path from 'node:path'
export const dynamic = 'force-static'

export async function generateMetadata({ params }:{ params: Promise<{ slug:string }> }) {
  const { slug } = await params;
  // Try to map slug to press hero
  const hero = `/img/press/${slug}-hero-3000x2000.jpg`
  return {
    title: `HOTMESS — ${slug}`,
    description: 'Show details, links and bio.',
    openGraph: { title: `HOTMESS — ${slug}`, description: 'Show details, links and bio.', images: [{ url: hero, width: 3000, height: 2000 }] },
    twitter: { card: 'summary_large_image' }
  }
}

function loadMap(){
  try{ return JSON.parse(fs.readFileSync(path.join(process.cwd(),'public/data/media_map.json'),'utf-8')) }catch{return{}}
}
function ExternalLinks({ links }:{ links?: {label:string, href:string}[] }){
  if(!links || !links.length) return null
  return (
    <div className="links" style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:12}}>
      {links.map((l,i)=>(<a key={i} className="cta" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>))}
    </div>
  )
}
export default async function Show({ params }:{ params: Promise<{ slug:string }> }){
  const { slug } = await params;
  const m:any = loadMap()[slug] || {}
  return (
    <main className="container">
      <div className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={m.hero || '/img/radio-neon-logo.png'} alt={m.alt || 'Show hero'} />
        <div className="overlay">
          <h1>{m.title || 'Show'}</h1>
          <p><a className="cta" href={`/shows/${slug}/bio`}>Read bio</a></p>
          {m.sponsor && <div className="kicker">Sponsored by {m.sponsor}</div>}
        </div>
      </div>
      <section style={{marginTop:16}}>
        <p>{m.bio}</p>
        {m.cta_merch && <p style={{marginTop:16}}><a className="cta" href={m.cta_merch.href}>{m.cta_merch.label}</a></p>}
        <ExternalLinks links={m.links} />
      </section>
    </main>
  )
}
