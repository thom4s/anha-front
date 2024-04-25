import { getPageBySlug } from "$lib/queries/pages"

export async function load( {params} ) {
    
    return {
        page: await getPageBySlug(params.rest, params.lang)
    }
}

