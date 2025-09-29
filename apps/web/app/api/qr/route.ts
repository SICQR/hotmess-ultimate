import { NextResponse } from 'next/server'
import QRCode from 'qrcode'

export async function GET(req: Request){
  const { searchParams } = new URL(req.url)
  const text = searchParams.get('text') || 'https://hotmessldn.com'
  const dataUrl = await QRCode.toDataURL(text, { margin: 1, width: 512 })
  const b64 = dataUrl.split(',')[1]
  const buf = Buffer.from(b64, 'base64')
  return new NextResponse(buf, { headers:{ 'Content-Type':'image/png', 'Cache-Control':'public, max-age=600' } })
}
