import { getCollaborationBySlug } from "$lib/queries/collaborations"


export async function load( {params} ) {

    return {
        page: await getCollaborationBySlug(params.slug)
    }
}