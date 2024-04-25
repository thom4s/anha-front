
import { API_URL } from '$env/static/private';
import { seo_query_string, flexible_query_string } from '$lib/utils/utils';
import { lang } from '$lib/config/website';

export async function getHomePage () {
    const query = `{
        nodeByUri(uri: "/") {
            id
            ... on Page {
                id
                authorDatabaseId
                content
                title
                ${seo_query_string}
            }
        }
    }`
    
    const page = await fetch(API_URL, {
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

    const page = await fetch(API_URL, {
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

    const page = await fetch(API_URL, {
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
    
    const pages = await fetch(API_URL, {
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