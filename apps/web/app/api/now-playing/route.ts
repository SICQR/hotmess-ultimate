import { NextResponse } from 'next/server'

// Configurable endpoints
const STATUS_URL = process.env.RADIOKING_STATUS_URL || 'https://listen.radioking.com/radio/736103/track/now'
const STREAM_URL = process.env.NEXT_PUBLIC_RADIO_STREAM || 'https://listen.radioking.com/radio/736103/stream/802454'

export async function GET(){
  try{
    const r = await fetch(STATUS_URL, { cache: 'no-store' })
    const data = await r.json().catch(()=>null)
    // Normalize common shapes
    const title = data?.title || data?.now?.song?.title || 'Live Stream'
    const artist = data?.artist || data?.now?.song?.artist || 'HOTMESS Radio'
    return NextResponse.json({ title, artist, stream: STREAM_URL })
  }catch{
    return NextResponse.json({ title:'Live Stream', artist:'HOTMESS Radio', stream: STREAM_URL })
  }
}
