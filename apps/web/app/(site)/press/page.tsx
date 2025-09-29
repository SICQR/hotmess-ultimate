export const metadata = { title:'HOTMESS — Press', description:'Official press kit, bios and assets', openGraph:{ title:'HOTMESS — Press', description:'Official press kit, bios and assets', images:[{ url:'/img/press/stewart-who-hero-3000x2000.jpg', width:3000, height:2000 }] }, twitter:{ card:'summary_large_image' } }
function Card({title, href, img, alt}:{title:string, href:string, img:string, alt:string}){
  return (<a className="card card-hero" href={href}><div className="card-media">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={img} alt={alt} /></div><div className="card-body"><h3>{title}</h3></div></a>)
}
export default function Press(){
  const items = [
    { title:'Paul King', href:'/img/press/paul-king-hero-3000x2000.jpg', img:'/img/press/paul-king-hero-3000x2000.jpg', alt:'Paul King press hero 3000x2000' },
    { title:'Stewart Who', href:'/img/press/stewart-who-hero-3000x2000.jpg', img:'/img/press/stewart-who-hero-3000x2000.jpg', alt:'Stewart Who press hero 3000x2000' },
    { title:'Nik Denton', href:'/img/press/nik-denton-hero-3000x2000.jpg', img:'/img/press/nik-denton-hero-3000x2000.jpg', alt:'Nik Denton press hero 3000x2000' },
    { title:'Tony English', href:'/img/press/tony-english-hero-3000x2000.jpg', img:'/img/press/tony-english-hero-3000x2000.jpg', alt:'Tony English press hero 3000x2000' },
    { title:'Jon Hemming', href:'/img/press/jon-hemming-hero-3000x2000.jpg', img:'/img/press/jon-hemming-hero-3000x2000.jpg', alt:'Jon Hemming press hero 3000x2000' },
    { title:'Grace', href:'/img/press/grace-hero-3000x2000.jpg', img:'/img/press/grace-hero-3000x2000.jpg', alt:'Grace press hero 3000x2000' }
  ]
  return (<main className="container">
    <div className="hero">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/img/radio-neon-logo.png" alt="HOTMESS Radiomark" /><div className="overlay"><h1>Press</h1><p>Official bios, photos, logos and brand notes.</p><a className="cta" href="/press/press-kit.zip">Download Press Kit</a></div></div>
    <section style={{marginTop:24}}>
      <h2>Hero images (3000×2000)</h2>
      <div className="grid grid-3">{items.map((i,idx)=><Card key={idx} title={i.title} href={i.href} img={i.img} alt={i.alt}/>)}</div>
      <h2 style={{marginTop:24}}>Bios</h2>
      <p>Read online: <a href="/shows/paul-king/bio">Paul King</a>, <a href="/shows/stewart-who/bio">Stewart Who</a>, <a href="/shows/nik-denton/bio">Nik Denton</a>, <a href="/shows/tony-english/bio">Tony English</a>, <a href="/shows/jon-hemming/bio">Jon Hemming</a>, <a href="/shows/grace/bio">Grace</a></p>
      <h2 style={{marginTop:24}}>Brand & Logos</h2>
      <div className="grid grid-3"><a className="card" href="/press/logos/hotmess-logotype.svg">HOTMESS Logotype (SVG)</a><a className="card" href="/press/logos/hotmess-mark.svg">HM Mark (SVG)</a><a className="card" href="/press/brand.md">Brand Notes (MD)</a></div>
    </section>
  </main>)
}
