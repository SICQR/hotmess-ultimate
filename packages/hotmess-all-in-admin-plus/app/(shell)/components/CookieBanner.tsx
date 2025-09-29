'use client'
import { useEffect, useState } from 'react'

type Consent = { essential: true; analytics: boolean; marketing: boolean }
const KEY = 'hm.cookie.consent.v1'

export default function CookieBanner(){
  const [show, setShow] = useState(false)
  const [consent, setConsent] = useState<Consent>({ essential: true, analytics: false, marketing: false })

  useEffect(()=>{
    try{
      const raw = localStorage.getItem(KEY)
      if(!raw) setShow(true)
    }catch{ setShow(true) }
  }, [])

  if(!show) return null

  const save = (c: Consent) => {
    localStorage.setItem(KEY, JSON.stringify({ ...c, ts: Date.now() }))
    setShow(false)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60]">
      <div className="mx-auto max-w-3xl m-3 border border-[color:var(--line)] rounded p-4 bg-black/90 backdrop-blur">
        <div className="text-sm">
          We use only the cookies you choose. Essentials keep the site running; Analytics & Marketing are opt‑in.
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" checked disabled /><span>Essential</span></label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={consent.analytics} onChange={e=>setConsent(p=>({ ...p, analytics: e.target.checked }))} /><span>Analytics</span></label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={consent.marketing} onChange={e=>setConsent(p=>({ ...p, marketing: e.target.checked }))} /><span>Ads & Affiliate</span></label>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 bg-[color:var(--accent)] rounded" onClick={()=>save({ essential: true, analytics: true, marketing: true })}>Accept all</button>
          <button className="px-4 py-2 border border-white/20 rounded" onClick={()=>save(consent)}>Save choices</button>
          <a href="/legal/cookies" className="ml-auto underline text-white/70">Cookies policy</a>
        </div>
      </div>
    </div>
  )
}
