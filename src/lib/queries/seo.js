
import { PUBLIC_API_URL } from "$env/static/public";


export async function getSeoSchema( ) {
    
    const seoConfig = await fetch(PUBLIC_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                seo {
                    social {
                        facebook {
                            url
                        }
                        instagram {
                            url
                        }
                        linkedIn {
                            url
                        }
                        twitter {
                            username
                        }
                        youTube {
                            url
                        }
                    }
                    schema {
                        companyName
                        homeUrl
                        inLanguage
                        siteName
                        siteUrl
                        logo {
                            sourceUrl
                            seo {
                                canonical
                                metaDesc
                                metaKeywords
                                opengraphAuthor
                                opengraphDescription
                                opengraphModifiedTime
                                opengraphPublishedTime
                                opengraphPublisher
                                opengraphSiteName
                                opengraphTitle
                                opengraphType
                                opengraphUrl
                                title
                            }
                        }
                    }
                }
                generalSettings {
                    description
                    title
                    url
                }
            }
            `
            }),
        })
        .then(async res => {
            const contentType = res.headers.get('content-type') || '';
            if (!res.ok || !contentType.includes('application/json')) {
                const text = await res.text();
                console.log(`DEBUG getSeoSchema status=${res.status} content-type=${contentType} body_start=${text.slice(0, 300)}`);
                return JSON.parse(text);
            }
            return res.json();
        })
        .then(res => {
            return res.data
        });

    return seoConfig;
}
