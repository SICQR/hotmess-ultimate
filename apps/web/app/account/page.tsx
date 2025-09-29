'use client'
import { useEffect, useState } from 'react'
import { getSb } from '../../lib/supabaseClient'

export default function Account(){
  const [user,setUser] = useState<any>(null)
  useEffect(()=>{ getSb().auth.getUser().then(r=> setUser(r.data.user || null)) },[])
  if(!user) return (<main className="container"><h1>Account</h1><p>Please <a className="cta" href="/auth">sign in</a>.</p></main>)
  return (
    <main className="container">
      <h1>Account</h1>
      <p>User ID: <code>{user.id}</code></p>
      <p>Email: <code>{user.email}</code></p>
      <div style={{marginTop:16}}>
        <a className="cta" href="/membership">Upgrade to PRO</a>
      </div>
    </main>
  )
}
