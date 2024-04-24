import { getPostBySlug } from "$lib/queries/posts"

export async function load( {params} ) {

    console.log(params)
    return {
        page: await getPostBySlug(params.slug)
    }
}