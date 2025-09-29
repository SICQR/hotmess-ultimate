'use client'
import { useEffect, useState } from 'react'
const KEY = 'hm.age.ok.v1'
export default function AgeGate({ children }:{ children: React.ReactNode }){
  const [ok, setOk] = useState<boolean>(false)
  const [ready, setReady] = useState<boolean>(false)
  useEffect(()=>{
    try{ const v = localStorage.getItem(KEY); setOk(v==='yes') }catch{}
    setReady(true)
  },[])
  if(!ready) return null
  if(ok) return <>{children}</>
  return (
    <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur grid place-items-center">
      <div className="w-[92%] max-w-md border border-white/20 rounded p-6 bg-black">
        <h2 className="text-xl font-semibold">18+ only</h2>
        <p className="mt-2 text-sm text-white/80">This section is for men aged 18 and over. By continuing, you confirm you are over 18.</p>
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-[color:var(--accent)] rounded" onClick={()=>{ localStorage.setItem(KEY,'yes'); setOk(true) }}>I’m over 18</button>
          <button className="px-4 py-2 border border-white/20 rounded" onClick={()=>history.back()}>Take me back</button>
        </div>
        <p className="text-xs text-white/60 mt-3">We don’t store your age; this just remembers this choice on your device.</p>
      </div>
    </div>
  )
}
