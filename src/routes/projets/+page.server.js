
import { getAllProjets} from "$lib/queries/projets"
import { getAllTerms } from "$lib/queries/taxonomies"
import { getPageBySlug } from "$lib/queries/pages"
export async function load( ) {

    return {
        page: await getPageBySlug('projets'),
        projets: await getAllProjets(),
        secteurs: await getAllTerms('secteurs'),
        savoirfaires: await getAllTerms('savoirfaires'),
    }
}