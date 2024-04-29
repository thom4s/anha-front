import { getProjetBySlug, getAdjacentProject } from "$lib/queries/projets"


export async function load( {params} ) {

    const page = await getProjetBySlug(params.slug);

    return {
        prevPage: await getAdjacentProject(page.databaseId, 'last'),
        nextPage: await getAdjacentProject(page.databaseId, 'first'),
        page
    }
}