import { NextResponse } from 'next/server'

const people = [
  { slug:'paul-king', name:'Paul King' },
  { slug:'stewart-who', name:'Stewart Who' },
  { slug:'nik-denton', name:'Nik Denton' },
  { slug:'tony-english', name:'Tony English' },
  { slug:'jon-hemming', name:'Jon Hemming' },
  { slug:'grace', name:'Grace' }
]

export async function GET(){
  const items = people.map(p => ({
    ...p,
    bioUrl: `/shows/${p.slug}/bio`,
    hero: `/img/press/${p.slug}-hero-3000x2000.jpg`
  }))
  return NextResponse.json({ updated: new Date().toISOString(), items })
}
