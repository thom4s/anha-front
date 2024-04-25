import { getOffreBySlug } from "$lib/queries/offres"


export async function load( {params} ) {

    return {
        page: await getOffreBySlug(params.slug, params.lang)
    }
}