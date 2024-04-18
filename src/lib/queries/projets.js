
import { API_URL } from '$env/static/private';


export async function getProjetBySlug( slug = '' ) {
    
    console.log('slug: ', slug)

    const projet = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                projet(id: "${slug}", idType: SLUG) {
                  id
                  excerpt
                  slug
                  title
                  template {
                    templateName
                  }
                  content
                  featuredImage {
                    node {
                      link
                      sizes
                      sourceUrl
                      srcSet
                      altText
                    }
                  }
                }
              }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.projet
        });

    return projet;
}


export async function getAllProjets( ) {
    
    const projets = await fetch(API_URL, {
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
            return res.data.projets
        });

    return projets;
}