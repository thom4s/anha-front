
import { PUBLIC_API_URL } from "$env/static/public";
import { seo_query_string, contentType_fields_string, basic_fields_string, featuredImage_fields_string, taxonomies_fields_string, flexible_query_string } from '$lib/utils/utils';



export async function getTranslation( uri, lang ) {
    
    if( uri === "/fr" ) {
        uri = '/';
    }
    const query = `
    {
        nodeByUri(uri: "${uri}") {
          id
          ... on Page {
            id
            translation(language: ${lang.toUpperCase()}) {
              uri
            }
          }
          ... on Projet {
            id
            translation(language: ${lang.toUpperCase()}) {
              uri
            }
          }
          ... on Collaboration {
            id
            translation(language: ${lang.toUpperCase()}) {
              uri
            }
          }
          ... on Post {
            id
            translation(language: ${lang.toUpperCase()}) {
              uri
            }
          }
        }
      }
    `

    console.log('getTranslation query: ', query)

    const pageTranslated = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            console.log('getTranslation res: ', res)
            return res.data.nodeByUri
        });

    return pageTranslated;
}


export async function getHomePage () {
    const query = `{
        nodeByUri(uri: "/") {
            id
            ... on Page {
                ${basic_fields_string}
                ${seo_query_string}
            }
        }
    }`
    
    const page = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            console.log('getHomePage res: ', res)
            return res.data.nodeByUri
        });

    return page;
}


export async function getPageBySlug( uri = '' ) {
    
    const query = `{
        page(id: "${uri}", idType: URI) {
            id
            uri
            title
            content
            date
            modified
            ${seo_query_string}
            ${flexible_query_string}
        }
    }`

    const page = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data.page
        });

    return page;
}

export async function getContactPage( uri = 'contact' ) {
    
    const query = `{
        page(id: "${uri}", idType: URI) {
            id
            uri
            title
            content
            ${seo_query_string}
            ${flexible_query_string}
        }
    }`

    const page = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data.page
        });

    return page;
}

export async function getAllPages( slug = '', lang = 'fr' ) {
    
    const pages = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    pages(where: {language: ${lang} }) {
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
            return res.data.pages
        });

    return pages;
}