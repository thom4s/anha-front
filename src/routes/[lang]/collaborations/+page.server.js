
import { getAllCollaborations } from "$lib/queries/collaborations"
import { getPageBySlug } from "$lib/queries/pages"
import { formProcess } from '$lib/utils/utils.js'

export async function load( ) {

    return {
        collaborations: await getAllCollaborations(),
        page: await getPageBySlug('collaborations')
    }
}


/* 
 * CONTACT FORM PARAMS & ACTIONS 
 **/

export const actions = {

	contact: async ({request}) => {

        const response = formProcess(request)    

        //console.log(response);

	},
};
