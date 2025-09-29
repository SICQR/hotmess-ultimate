import fs from 'node:fs'
import path from 'node:path'
function loadMap(){ try{return JSON.parse(fs.readFileSync(path.join(process.cwd(),'public/data/media_map.json'),'utf-8'))}catch{return {}} }
function ExternalLinks({ links }:{ links?: {label:string, href:string}[] }){ if(!links||!links.length) return null; return (<div className="links" style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>{links.map((l,i)=>(<a key={i} className="cta" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>))}</div>) }
export default function Bio(){ const m:any = loadMap()['grace'] || {}; return (<main className="container">
  <div className="hero">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={m.hero || '/img/radio-neon-logo.png'} alt={m.alt || 'Press hero'} /><div className="overlay"><h1>{m.title || 'Artist'}</h1></div></div>
  <section className="content" style={{marginTop:16}}>

<p><strong>History.</strong> Soul‑leaning selections; residencies across Europe. [Assumption]</p>
<p><strong>Current.</strong> Warm, deep sets on HOTMESS late nights. [Assumption]</p>
<p><strong>Next.</strong> After Dark takeovers. [Assumption]</p>

    <ExternalLinks links={m.links} />
    <p style={{marginTop:12}}><a className="cta" href="/shows/grace">Back to show</a></p>
  </section>
</main>) }
