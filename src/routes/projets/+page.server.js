
import { getAllProjets} from "$lib/queries/projets"


export async function load( ) {

    return {
        projets: await getAllProjets()
    }
}