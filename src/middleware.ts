import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { adminEmails } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  // permission check for admin page
  if (path.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    if (!token.email || !adminEmails.includes(token.email)) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Protected pages
  const protectedPages = ['/dashboard', '/profile', '/settings']
  const isProtectedPage = protectedPages.some(page => path.startsWith(page))

  // 1. didn't logedin
  if (!token && isProtectedPage) {
    const url = new URL('/login', request.url)
    url.searchParams.set('callbackUrl', path)
    return NextResponse.redirect(url)
  }

  // 2. logedin and in the login page
  if (token && path.includes('/login')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // 3. token exist
  if (token) {
    const response = NextResponse.next()
    // add the token to header
    response.headers.set('x-user-id', token.sub || '')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}