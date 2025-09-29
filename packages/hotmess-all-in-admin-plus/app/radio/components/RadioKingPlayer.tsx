'use client'
import { useEffect, useState } from 'react'

export default function RadioKingPlayer(){
  const stream = process.env.NEXT_PUBLIC_RADIOKING_STREAM || ''
  const metaUrl = process.env.NEXT_PUBLIC_RADIOKING_META_URL || ''
  const [title, setTitle] = useState('Live stream')

  useEffect(()=>{
    let t: any
    async function poll(){
      try{
        if(!metaUrl) return
        const res = await fetch(metaUrl, { cache: 'no-store' })
        const j = await res.json()
        const song = j?.title || j?.now?.song?.title
        if(song) setTitle(song)
      }catch{}
      t = setTimeout(poll, 15000)
    }
    poll()
    return ()=>clearTimeout(t)
  }, [metaUrl])

  return (
    <div className="border border-[color:var(--line)] rounded p-4">
      <div className="text-sm opacity-70">Now playing</div>
      <div className="text-lg font-semibold">{title}</div>
      <audio className="w-full mt-3" src={stream} controls preload="none" />
    </div>
  )
}
