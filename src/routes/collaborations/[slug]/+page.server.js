import { getCollaborationBySlug } from "$lib/queries/collaborations"


export async function load( {params} ) {

    return {
        collaboration: await getCollaborationBySlug(params.slug)
    }
}