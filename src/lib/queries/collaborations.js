
import { API_URL } from '$env/static/private';
import { seo_query_string } from '$lib/utils/utils';


export async function getCollaborationBySlug( slug = '' ) {
    
    const collaboration = await fetch(API_URL, {
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
                    featuredImage {
                        node {
                            link
                            sizes
                            sourceUrl
                            srcSet
                            altText
                        }
                    }
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


export async function getAllCollaborations( ) {
    
    const collaborations = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    collaborations {
                        nodes {
                            excerpt
                            id
                            slug
                            title
                            ${seo_query_string}

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