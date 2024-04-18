
import { getAllCollaborations } from "$lib/queries/collaborations"

export async function load( ) {

    return {
        collaborations: await getAllCollaborations()
    }
}