import { NextResponse, NextRequest } from 'next/server'
export function middleware(req: NextRequest){
  const url = req.nextUrl
  const path = url.pathname
  const cookies = req.cookies
  const aged = cookies.get('hm_age_ok')?.value === '1'
  const isExplicit = path.startsWith('/shows/') || path.startsWith('/essentials')
  if(isExplicit && !aged){
    const redirect = new URL('/age', req.url); redirect.searchParams.set('next', path)
    return NextResponse.redirect(redirect)
  }
  if(path.startsWith('/admin')){
    const role = cookies.get('hm_role')?.value
    if(role !== 'admin'){
      const redirect = new URL('/auth', req.url); redirect.searchParams.set('next', path)
      return NextResponse.redirect(redirect)
    }
  }
  return NextResponse.next()
}
export const config = { matcher: ['/shows/:path*','/essentials','/admin/:path*'] }
