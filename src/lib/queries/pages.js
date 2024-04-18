
import { API_URL } from '$env/static/private';



export async function getPageBySlug( uri = '' ) {
    
    const query = `{
    page(id: "${uri}", idType: URI) {
        id
        uri
        title
        content
    }
}`
    console.log(query)

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