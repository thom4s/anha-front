import { getOffreBySlug } from "$lib/queries/offres"


export async function load( {params} ) {

    return {
        offre: await getOffreBySlug(params.slug)
    }
}