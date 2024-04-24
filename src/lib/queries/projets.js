
import { API_URL } from '$env/static/private';
import { seo_query_string } from '$lib/utils/utils';


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
                  ${seo_query_string}
                  informationsProjet {
                    secteur {
                        nodes {
                            id
                            slug
                            name
                            taxonomyName
                        }
                    }
                    savoirFaire {
                        nodes {
                            name
                            slug
                            taxonomyName
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
            console.log('res: ', res)
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
                    projets(first: 5, after: "endCursorFromPreviousRequestGoesHere") {
                        nodes {
                            excerpt
                            id
                            slug
                            title
                            ${seo_query_string}

                            informationsProjet {
                                secteur {
                                    nodes {
                                        id
                                        slug
                                        name
                                        taxonomyName
                                    }
                                }
                                savoirFaire {
                                    nodes {
                                        name
                                        slug
                                        taxonomyName
                                    }
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
            console.log('projets res: ', res)
            return res.data.projets
        });

    return projets;
}