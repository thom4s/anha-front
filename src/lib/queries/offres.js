
import { API_URL } from '$env/static/private';


export async function getOffreBySlug( slug = '' ) {
    
    const offre = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                offre(id: "${slug}", idType: SLUG) {
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
            return res.data.offre
        });

    return offre;
}


export async function getAllOffres( ) {
    
    const offres = await fetch(API_URL, {
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
        });

    return offres;
}