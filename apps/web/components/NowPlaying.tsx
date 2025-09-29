'use client'
import { useEffect, useState } from 'react'

export default function NowPlaying(){
  const [np, setNp] = useState<{title:string,artist:string,stream:string}|null>(null)
  useEffect(()=>{
    let t:any
    const load = async ()=>{
      try{
        const r = await fetch('/api/now-playing', { cache:'no-store' })
        const j = await r.json()
        setNp(j)
      }catch{ /* ignore */ }
      t = setTimeout(load, 20000)
    }
    load()
    return ()=> t && clearTimeout(t)
  }, [])
  if(!np) return null
  return (
    <a className="cta" href={np.stream} target="_blank" rel="noreferrer" style={{marginLeft:'auto'}}>
      ▶︎ Now Playing: {np.artist} — {np.title}
    </a>
  )
}
