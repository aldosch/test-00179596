import React from 'react'

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	}
}

export const getStaticProps = ({ params }) => {
	return {
		props: {
            fullUrl: params['full-url'],
			slug: params['slug'],
            dateStamp: new Date().toString()
        }
	}
}

const Page = ({ fullUrl, slug, dateStamp }) => {
	return (
		<div>
			<p>Full URL: {fullUrl} </p>
			<p>Slug: {slug} </p>
			<p>Render time: {dateStamp}</p>
			<p>Expected revalidate URL: <a href={`/api/revalidate?path=/${fullUrl}/${slug}`}>/api/revalidate?path=/{fullUrl}/{slug}</a></p>
		</div>
	)
}

export default Page
