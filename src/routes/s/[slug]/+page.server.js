import { API_URL } from '$env/static/private';



export async function load( {param} ) {

    return {
        projets: await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    {
                        projets {
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
                console.log(res.data.projets)
                return res.data.projets
            }),

    }
}