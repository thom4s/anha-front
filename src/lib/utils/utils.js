/**
 * Decorate SEO title.
 * @param {string} title
 */
export default function (title) {
	return `${title} – Anha`;
}

export const basic_fields_string = `
	id
	slug
	content
	title
	date
	modified
	uri
	template {
		templateName
	}
	contentType {
		node {
			name
		}
	}
`;

export const extended_fields_string = `
	id
	slug
	content
	title
	date
	modified
	excerpt
	uri
	template {
		templateName
	}
	contentType {
		node {
			name
		}
	}
`;

export const author_fields_string = `
	author {
		node {
		name
		}
	}
`

export const taxonomies_fields_string = `
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
`

export const featuredImage_fields_string = `
	featuredImage {
		node {
			caption
			altText
			fileSize
			link
			sizes
			srcSet
			sourceUrl
		}
	}
`

export const contentType_fields_string = `
	contentType {
		node {
			name
		}
	}
`

export const seo_query_string = `
		seo {
			metaDesc
			metaKeywords
			metaRobotsNofollow
			metaRobotsNoindex
			title
			readingTime
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