'use client'
export default function Age(){
  const params = typeof window!=='undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams()
  const next = params.get('next') || '/'
  return (
    <main className="container">
      <h1>18+ Only. Enter like you mean it.</h1>
      <p>Men-only; consent-first. Aftercare is information/services, not medical.</p>
      <button className="cta" onClick={()=>{
        document.cookie='hm_age_ok=1; Path=/; Max-Age='+(60*60*24*365).toString()
        window.location.href=next
      }}>I am 18+</button>
    </main>
  )
}
