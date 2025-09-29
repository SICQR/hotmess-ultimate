'use client'
import { useState } from 'react'
import { getSb } from '../../lib/supabaseClient'

export default function Auth(){
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  return (
    <main className="container">
      <h1>Sign in</h1>
      <p>We’ll email you a magic link. No spam.</p>
      <form onSubmit={async (e)=>{
        e.preventDefault()
        const sb = getSb()
        const { error } = await sb.auth.signInWithOtp({ email, options:{ emailRedirectTo: (typeof window!=='undefined'? window.location.origin: '') + '/account' } })
        setMsg(error? ('Error: '+error.message) : 'Check your inbox for a link.')
      }}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@domain.com" style={{padding:10, borderRadius:8, border:'1px solid #333', marginRight:8}}/>
        <button className="cta" type="submit">Send link</button>
      </form>
      {msg && <p className="small" style={{marginTop:12}}>{msg}</p>}
    </main>
  )
}
