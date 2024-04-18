
import { getAllOffres } from "$lib/queries/offres"

export async function load( ) {

    return {
        offres: await getAllOffres()
    }
}