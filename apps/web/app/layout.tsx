import './globals.css'
import NowPlaying from '../components/NowPlaying'

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <a href="/">Home</a>
          <a href="/hosts">Hosts</a>
          <a href="/timetable">Timetable</a>
          <a href="/membership">Membership</a>
          <a href="/shop">Shop</a>
          <a href="/press">Press</a>
          <NowPlaying />
        </header>
        {children}
        <footer className="footer">
          <a href="/legal">Legal</a>
          <a href="/legal/terms">Terms</a>
          <a href="/legal/privacy">Privacy</a>
          <a href="/legal/caredisclaimer">Care Disclaimer</a>
          <a href="/legal/accessibility">Accessibility</a>
          <a href="/legal/data-privacy">Data & Privacy</a>
        </footer>
      </body>
    </html>
  )
}
