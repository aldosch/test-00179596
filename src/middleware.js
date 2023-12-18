import { NextResponse } from 'next/server'

export function middleware(request) {
	const responseUrl = new URL(request.url)
	console.log(responseUrl.toString())
	const response = NextResponse.next()
    
	const responseUrlBase64UrlSafe = Buffer.from(responseUrl.toString()).toString('base64url')

	responseUrl.pathname = `/${responseUrlBase64UrlSafe}${responseUrl.pathname}`

	return NextResponse.rewrite(responseUrl, response)
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|assets|.well-known|manifest.json).*)'
	]
}
