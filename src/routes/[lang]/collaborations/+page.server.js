
import { getAllCollaborations } from "$lib/queries/collaborations"
import { getPageBySlug } from "$lib/queries/pages"

export async function load( ) {

    return {
        collaborations: await getAllCollaborations(),
        page: await getPageBySlug('collaborations')
    }
}