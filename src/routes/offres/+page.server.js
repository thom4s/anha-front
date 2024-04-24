
import { getAllOffres } from "$lib/queries/offres"
import { getPageBySlug } from "$lib/queries/pages"

export async function load( ) {

    return {
        offres: await getAllOffres(),
        page: await getPageBySlug('offres')
    }
}