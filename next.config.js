const { createSecureHeaders } = require('next-secure-headers')

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
		const superSafe = createSecureHeaders({
			forceHTTPSRedirect: [
				true,
				{
					maxAge: 60 * 60 * 24 * 4,
					includeSubDomains: true
				}
			],
			referrerPolicy: 'same-origin',
			frameGuard: 'sameorigin',
			xssProtection: false
		})

		const allowIframeEmbed = [
			{
				key: 'x-frame-options',
				value: 'allowall'
			}
		]

		return Promise.resolve([
			{
				source: '/:path*',
				headers: superSafe
			},
			{
				source: '/playground/:slug',
				headers: allowIframeEmbed
			},
			{
				source: '/project/:slug/code/:snippetId',
				headers: allowIframeEmbed
			}
		])
	},
}

module.exports = nextConfig
