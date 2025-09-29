export const metadata = {
  title: 'HOTMESS — Hosts',
  description: 'The roster — bios, shows and links.',
  openGraph: {
    title: 'HOTMESS — Hosts',
    description: 'The roster — bios, shows and links.',
    images: [{ url: '/img/press/paul-king-hero-3000x2000.jpg', width: 3000, height: 2000 }]
  },
  twitter: { card: 'summary_large_image' }
}

import fs from 'node:fs'
import path from 'node:path'
function loadMap(){
  try{ return JSON.parse(fs.readFileSync(path.join(process.cwd(),'public/data/media_map.json'),'utf-8')) }catch{return{}}
}
export default function Hosts(){
  const m = loadMap()
  const hosts = [
    { name:'Paul King', show:'RAW CONVICT SESSIONS', slug:'paul-king', img:m['paul-king']?.hero || '/img/radio-neon-logo.png', bio:m['paul-king']?.bio },
    { name:'Stewart Who', show:'Conversations', slug:'stewart-who', img:m['stewart-who']?.hero || '/img/dial-a-daddy-photo.png', bio:m['stewart-who']?.bio },
    { name:'Nik Denton', show:'Club Systems', slug:'nik-denton', img:m['nik-denton']?.hero || '/img/radio-neon-logo.png', bio:m['nik-denton']?.bio },
    { name:'Tony English', show:'Remix Hour', slug:'tony-english', img:m['tony-english']?.hero || '/img/radio-graffiti-mic.png', bio:m['tony-english']?.bio },
    { name:'Jon Hemming', show:'Night Works', slug:'jon-hemming', img:m['jon-hemming']?.hero || '/img/radio-neon-logo.png', bio:m['jon-hemming']?.bio },
    { name:'Grace', show:'Grace After Dark', slug:'grace', img:m['grace']?.hero || '/img/wake-the-mess-radio.png', bio:m['grace']?.bio },
  ]
  return (
    <main className="container">
      <h1>Hosts</h1>
      <div className="grid grid-3">
        {hosts.map(h=>(
          <a key={h.slug} className="card card-hero" href={`/shows/${h.slug}`}>
            <div className="card-media">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={h.img} alt={`${h.name} host portrait`} /></div>
            <div className="card-body"><div className="kicker">{h.show}</div><h3>{h.name}</h3><p className="small">{h.bio}</p>
              <div className="card-actions" style={{marginTop:8, display:'flex', gap:8}}>
                <a className="cta" href={`/shows/${h.slug}`}>Open show</a>
                <a className="cta" href={`/shows/${h.slug}/bio`}>Read bio</a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
