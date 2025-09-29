async function getData(){
  const fs = await import('fs').then(m => m.promises)
  const path = await import('path')
  
  const scheduleData = await fs.readFile(path.join(process.cwd(), 'public/data/schedule.json'), 'utf8')
  const mapData = await fs.readFile(path.join(process.cwd(), 'public/data/media_map.json'), 'utf8')
  
  const sch = JSON.parse(scheduleData)
  const map = JSON.parse(mapData)
  return { sch, map }
}
export default async function Timetable(){
  const { sch, map } = await getData()
  const items = sch?.items || sch || []
  return (<main className="container">
    <h1>Timetable</h1>
    <div className="grid grid-3">
      {items.map((s:any, i:number)=>{
        const slug = (s.slug || s.show_slug || '').toLowerCase()
        const m = map[slug] || {}
        const img = m.hero || m.heros?.[0] || '/img/radio-neon-logo.png'
        const title = m.title || s.title || slug
        const when = s.start ? new Date(s.start).toLocaleString() : (s.when || '')
        return (
          <a key={i} className="card card-hero" href={`/shows/${slug}`} aria-label={`${title} at ${when}`}>
            <div className="card-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={m.alt || `${title} artwork`} />
            </div>
            <div className="card-body">
              <div className="kicker">{when}</div>
              <h3>{title}</h3>
              {m.sponsor && <div className="sponsor">Sponsored by {m.sponsor}</div>}
            </div>
          </a>
        )
      })}
    </div>
  </main>)
}
