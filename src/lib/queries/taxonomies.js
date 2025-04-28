
import { PUBLIC_API_URL } from "$env/static/public";



export async function getAllTerms( taxonomie = '', lang  = '' ) {
    

    const query =  `
        {
            ${taxonomie}(where: {language: ${lang.toUpperCase()}}) {
                nodes {
                    count
                    name
                    slug
                }
            }
        }
    `

    const terms = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
                query
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data[taxonomie]
        });

    return terms;
}
