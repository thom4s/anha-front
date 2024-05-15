import { PUBLIC_API_URL } from "$env/static/public";
import { seo_query_string, basic_fields_string, featuredImage_fields_string } from '$lib/utils/queries';


export async function getAllPressArticles( lang = 'fr' ) {
    
    const posts = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    presses( where: {language: ${lang.toUpperCase()} }) {
                        pageInfo {
                            startCursor
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            total
                        }
                        edges {
                            cursor
                            node {
                                ${basic_fields_string}
                                ${seo_query_string}
                                ${featuredImage_fields_string}
                                informationsPress {
                                    date
                                    label
                                    lien
                                }
                            }
                        }

                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('getAllPosts', res)
            return res.data.presses
        });

    return posts;
}