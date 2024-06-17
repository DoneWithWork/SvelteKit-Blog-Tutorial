import type { Post } from '$lib/types.js'

export async function load({ fetch }) {
	const responce = await fetch('api/posts')
	const posts: Post[] = await responce.json()
	return { posts }
}
