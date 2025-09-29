export default function Membership(){
  return (
    <main className="container">
      <h1>Pick your poison.</h1>
      <div className="grid grid-3">
        <div className="card"><h3>Free</h3><ul><li>Live radio</li><li>Community</li></ul><a className="cta" href="/auth">Join Free</a></div>
        <div className="card"><h3>PRO</h3><ul><li>Replays archive</li><li>Dial‑a‑Daddy priority</li><li>Affiliate 10%</li></ul><a className="cta" href="/auth">Go PRO (£4.99/mo)</a></div>
        <div className="card"><h3>Admin</h3><ul><li>Studio tools</li><li>Payouts dashboard</li></ul><a className="cta" href="/auth">Sign in</a></div>
      </div>
      <p className="small">Men-only, 18+. GDPR-aligned. Cancel anytime.</p>
    </main>
  )
}
