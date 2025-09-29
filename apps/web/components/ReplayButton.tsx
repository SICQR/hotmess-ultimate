'use client'
import { useState } from 'react'
export function ReplayButton({ slug }:{ slug:string }){
  const [msg, setMsg] = useState('')
  return <button className="cta" onClick={()=>setMsg('Replay requires PRO account. Signed URL comes from Edge Function in production.')}>{msg || 'Get Replay'}</button>
}
