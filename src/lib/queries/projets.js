
import { PUBLIC_API_URL } from "$env/static/public";

import { seo_query_string, contentType_fields_string, basic_fields_string, taxonomies_fields_string, extended_fields_string, featuredImage_fields_string, flexibleContents_query_string } from '$lib/utils/utils';




export async function getProjetBySlug( slug = '', lang = 'fr' ) {
    
    console.log('slug: ', slug)

    const query = `
        {
            projet(id: "${slug}", idType: SLUG) {
                ${extended_fields_string}
                ${featuredImage_fields_string}
                ${seo_query_string}
                ${flexibleContents_query_string}
                ${contentType_fields_string}
                ${taxonomies_fields_string}
            }
        }
    `
    console.log('query', query)


    const projet = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data.projet
        });

    return projet;
}


export async function getAllProjets( ) {
    
    const query = `
        {
            projets(first: 5, after: "endCursorFromPreviousRequestGoesHere") {
                nodes {
                    ${extended_fields_string}
                    ${seo_query_string}
                    ${contentType_fields_string}
                    ${flexibleContents_query_string}
                    ${taxonomies_fields_string}
                }
            }
        }
    `
    console.log('query', query)

    const projets = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('projets res: ', res)
            return res.data.projets
        });

    return projets;
}