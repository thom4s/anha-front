import { getAllPosts } from "$lib/queries/posts"
import { getPageBySlug } from "$lib/queries/pages"


export async function load( ) {

    return {
        posts: await getAllPosts(),
        page: await getPageBySlug('actualites')
    }
}