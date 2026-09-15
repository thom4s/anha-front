
import { PUBLIC_API_URL } from "$env/static/public";


export async function getSeoSchema( ) {

    try {
        return await getSeoSchemaFetch();
    } catch (err) {
        console.log('DEBUG getSeoSchema fetch error', JSON.stringify({
            message: err?.message,
            code: err?.cause?.code,
            errno: err?.cause?.errno,
            syscall: err?.cause?.syscall,
            address: err?.cause?.address,
            port: err?.cause?.port,
            name: err?.cause?.name
        }));
        throw err;
    }
}

async function getSeoSchemaFetch( ) {

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
            const text = await res.text();
            try {
                return JSON.parse(text);
            } catch (e) {
                console.log('DEBUG getSeoSchema non-json response', JSON.stringify({
                    status: res.status,
                    contentType: res.headers.get('content-type'),
                    body: text.slice(0, 500)
                }));
                throw e;
            }
        })
        .then(res => {
            return res.data
        });

    return seoConfig;
}
