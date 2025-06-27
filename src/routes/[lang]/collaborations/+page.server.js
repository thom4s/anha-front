
import { getAllCollaborations } from "$lib/queries/collaborations"
import { getPageBySlug } from "$lib/queries/pages"
import { formProcess } from '$lib/utils/utils.js'
import { fail } from '@sveltejs/kit'


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

	    let { firstname, lastname, adresse, codepostal, ville, telephone, mail, message } = Object.fromEntries(await request.formData());

        if (!firstname || !lastname || !mail ) {
            return fail(400, { firstname, missing: true })
        }
        
        const response = formProcess(request)    

        return { 
            success: true,
            response
        }
	},
};
