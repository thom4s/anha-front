
import { PUBLIC_API_URL } from "$env/static/public";
import { seo_query_string, featuredImage_fields_string } from '$lib/utils/queries';


export async function getCollaborationBySlug( slug = '', lang = 'fr' ) {
    
    const collaboration = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                collaboration(id: "${slug}", idType: SLUG) {
                    id
                    excerpt
                    slug
                    title
                    template {
                        templateName
                    }
                    content
                    ${featuredImage_fields_string}
                    ${seo_query_string}

                }
              }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.collaboration
        });

    return collaboration;
}


export async function getAllCollaborations( lang = 'fr' ) {
    
    const collaborations = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    collaborations( where: {language: ${lang.toUpperCase()} }) {
                        nodes {
                            excerpt
                            id
                            slug
                            title
                            ${seo_query_string}
                            ${featuredImage_fields_string}
                            informationsCollaboration {
                                date
                                label
                                lien
                            }
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.collaborations
        });

    return collaborations;
}