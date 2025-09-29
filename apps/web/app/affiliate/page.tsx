'use client'
import { useMemo, useState } from 'react'

export default function Affiliate(){
  const [code, setCode] = useState('your-handle')
  const url = useMemo(()=> `https://hotmessldn.com/?ref=${encodeURIComponent(code)}`, [code])
  const qr = `/api/qr?text=${encodeURIComponent(url)}`
  return (
    <main className="container">
      <h1>Affiliate</h1>
      <p>Share your link. Get paid. Simple.</p>
      <input value={code} onChange={e=>setCode(e.target.value)} placeholder="your-handle" style={{padding:10, borderRadius:8, border:'1px solid #333', marginRight:8}}/>
      <a className="cta" href={url} target="_blank" rel="noreferrer">Copy link</a>
      <div style={{marginTop:16}}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={qr} alt="Affiliate QR" width={256} height={256}/>
      </div>
      <p className="small">Tip: print the QR for events. Scans attribute to your code.</p>
    </main>
  )
}
