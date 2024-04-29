
import { PUBLIC_API_URL } from "$env/static/public";
import { seo_query_string, contentType_fields_string, basic_fields_string, featuredImage_fields_string, author_fields_string } from '$lib/utils/queries';



export async function getPostBySlug( slug = '' ) {
    
    const post = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    post(id: ${slug}, idType: SLUG ) {
                        ${basic_fields_string}
                        ${featuredImage_fields_string}
                        ${author_fields_string}
                        ${contentType_fields_string}
                        ${seo_query_string}
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.post
        });

    return post;
}


export async function getAllPosts( lang = 'fr' ) {
    
    const posts = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    posts(where: {language: ${lang.toUpperCase()} }) {
                        nodes {
                            ${basic_fields_string}
                            ${seo_query_string}
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('getAllPosts', res)
            return res.data.posts
        });

    return posts;
}