import { getPageBySlug } from "$lib/queries/pages"

export async function load( ) {

    return {
        homepage: await getPageBySlug('accueil')
    }
}