
import { getAllProjets} from "$lib/queries/projets"
import { getAllTerms } from "$lib/queries/taxonomies"

export async function load( ) {

    return {
        projets: await getAllProjets(),
        secteurs: await getAllTerms('secteurs'),
        savoirfaires: await getAllTerms('savoirfaires'),
    }
}