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
export const pushContact_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushcontactLayout {
		__typename
		labelDuBouton
		text
		titre
	}
`;

export const references_query_string = `
	... on ContenusFlexiblesContenusFlexiblesReferencesLayout {
		__typename
		titre
		logos {
			nodes {
				id
				sourceUrl(size: MEDIUM)
			}
		}
	}
`;

export const pushNews_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushnewsLayout {
		__typename
		titre
		news {
			nodes {
				uri
				link
				date
				... on Post {
					id
					link
					link
					title
				}
			}
		}
	}
`

export const pushPages_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushpagesLayout {
		__typename
		titre
		pages {
			nodes {
				... on Page {
					id
					date
					title
					link
				}
			}
		}
	}
`

export const richtext_query_string = `
	... on ContenusFlexiblesContenusFlexiblesRichtextLayout {
		__typename
		titre
		contentOne
		contentTwo
	}
`

export const pushProjets_query_string = `
	... on ContenusFlexiblesContenusFlexiblesPushprojetsLayout {
		__typename
		titre
		projets {
			nodes {
				... on Projet {
					id
					date
					title
					link
				}
			}
		}
	}
`

export const tabExpertise_query_string = `
	... on ContenusFlexiblesContenusFlexiblesTabExpertiseLayout {
		__typename
		contenus
		titre
	}
`
export const video_query_string = `
	... on ContenusFlexiblesContenusFlexiblesVideoLayout {
		__typename
		titre
		video
	}
`



export const flexibleContents_query_string = `
	contenusFlexibles {
		contenusFlexibles {
			${pushContact_query_string}
			${pushNews_query_string}
			${pushPages_query_string}
			${pushProjets_query_string}
			${references_query_string}
			${richtext_query_string}
			${tabExpertise_query_string}
			${video_query_string}
		}
  	}
`