
import { PUBLIC_API_URL } from "$env/static/public";

import { seo_query_string, contentType_fields_string, basic_fields_string, taxonomies_fields_string, extended_fields_string, featuredImage_fields_string, flexibleContents_query_string } from '$lib/utils/queries';




export async function getProjetBySlug( slug = '' ) {
    
    console.log('slug: ', slug)

    const query = `
        {
            projet(id: "${slug}", idType: SLUG) {
                ${extended_fields_string}
                ${featuredImage_fields_string}
                ${seo_query_string}
                ${contentType_fields_string}
                ${taxonomies_fields_string}
            }
        }
    `

    const projet = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.projet
        });

    return projet;
}


export async function getAdjacentProject( databaseId = '', direction = '' ) {
    
    const query = `
        {
            projets(where: {id: ${databaseId}} ) {
                edges {
                    cursor
                    node {
                        language {
                            slug
                        }
                    }
                }
            }
        }
    `

    const currentProject = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.projets
        });

    console.log('currentProject: ', currentProject)


    const query_two = `
        {
            projets(after: "${currentProject.edges[0].cursor}", ${direction}: 1, where: {language: ${currentProject.edges[0].node.language.slug.toUpperCase()}}) {
                edges {
                    node {
                        title
                        slug
                        uri
                    }
                    cursor
                }
            }
        }
    `
    console.log('query_two: ', query_two)

    const adjacentProject = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query_two }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('adjacentProject res: ', res)
            return res.data.projets.edges[0]
        });

    console.log('adjacentProject: ', adjacentProject)


    return adjacentProject;
}



export async function getAllProjets( lang = 'ALL') {
    
    const query = `
        {
            projets(first: 50, after: "endCursorFromPreviousRequestGoesHere",where: {language: ${lang.toUpperCase()}}) {
                nodes {
                    ${extended_fields_string}
                    ${contentType_fields_string}
                    ${featuredImage_fields_string}
                    ${taxonomies_fields_string}
                }
            }
        }
    `

    const projets = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.projets
        });

    return projets;
}