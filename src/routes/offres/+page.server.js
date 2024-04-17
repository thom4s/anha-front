import { API_URL } from '$env/static/private';



export async function load( ) {

    return {
        offres: await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    {
                        offres {
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
                return res.data.offres
            }),

    }
}