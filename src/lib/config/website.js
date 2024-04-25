import { writable } from "svelte/store";

import {
	PUBLIC_SITE_URL,
} from '$env/static/public';

export const website = writable({
	author: 'Anha',
	ogLanguage: 'fr_FR',
	siteLanguage: 'fr-FR',
	siteTitle: 'Anha',
	siteShortTitle: 'Anha',
	description: ' Design to Manufacture',
	siteUrl: PUBLIC_SITE_URL,
	backgroundColor: '#1b4079',
	themeColor: '#d62828',
	contactEmail: '',
	facebookPage: '',
	linkedinProfile: '',
	twitterUsername: '',
	twitterUserId: '',
});

export const lang = writable('fr');

export { website as default };
