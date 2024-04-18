import { getPageByTitle } from "$lib/queries/pages"

export async function load( ) {

    return {
        homepage: await getPageByTitle('Accueil')
    }
}