/**
 * Decorate SEO title.
 * @param {string} title
 */
export default function (title) {
	return `${title} – Anha`;
}

export const seo_query_string = `
		seo {
			metaDesc
			metaKeywords
			metaRobotsNofollow
			metaRobotsNoindex
			title
			opengraphTitle
			opengraphType
			opengraphUrl
			opengraphSiteName
			opengraphPublisher
			opengraphPublishedTime
			opengraphModifiedTime
			opengraphImage {
				altText
				sourceUrl
			}
			opengraphDescription
			opengraphAuthor
			breadcrumbs {
				url
				text
			}
			canonical
		}
	`;

//https://github.com/wp-graphql/wp-graphql-acf/blob/develop/docs/fields/flexible-content.md
export const flexible_query_string = `
	contenusFlexibles {
		contenusFlexibles {
		... on ContenusFlexiblesContenusFlexiblesRebondsLayout {
			fieldGroupName
			titre
			page {
				nodes {
					... on Projet {
					  id
					  title
					  uri
					}
					... on Offre {
					  id
					  title
					  uri
					}
					... on Post {
					  id
					  title
					  uri
					}
					... on Page {
					  id
					  title
					  uri
					}
					... on Collaboration {
					  id
					  title
					  uri
					}
				}
			}
		}
		... on ContenusFlexiblesContenusFlexiblesListePagesLayout {
			fieldGroupName
			titre
			pages {
				nodes {
					... on Projet {
					  id
					  title
					  uri
					}
					... on Offre {
					  id
					  title
					  uri
					}
					... on Post {
					  id
					  title
					  uri
					}
					... on Page {
					  id
					  title
					  uri
					}
					... on Collaboration {
					  id
					  title
					  uri
					}
				}
			}
		}
	}
  }
`