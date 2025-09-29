import { NextResponse } from 'next/server'
import { promises as fs } from 'node:fs'
import path from 'node:path'

export async function GET(){
  const filePath = path.join(process.cwd(), 'public', 'press', 'press-kit.zip')
  const buf = await fs.readFile(filePath)
  const res = new NextResponse(buf, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="HOTMESS-press-kit.zip"',
      'Cache-Control': 'public, max-age=3600, immutable'
    }
  })
  return res
}
