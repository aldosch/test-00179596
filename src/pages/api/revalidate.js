
export default async function handler(req, res) {
	try {
		const path = req.query.path

		console.log(`Attempting revalidating: ${path}`)
		await res.revalidate(path)
		console.log('Revalidation success')
		return res.json({ revalidated: true })
	} catch (err) {
		console.error('Error revalidating', err)
		return res
			.status(500)
			.send('Error revalidating - ' + (err.message || 'Something went wrong!'))
	}
}
