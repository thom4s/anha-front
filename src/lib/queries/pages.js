
import { API_URL } from '$env/static/private';



export async function getPageByTitle( title = '' ) {
    
    const page = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    pages(where: {title: "${title}"}) {
                        edges {
                            node {
                                id
                                content
                                slug
                                title
                            }
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data.pages.edges[0]
        });

    return page;
}


export async function getAllPages( slug = '' ) {
    
    console.log('slug: ', slug)

    const pages = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    pages {
                        nodes {
                            excerpt
                            id
                            slug
                            title
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