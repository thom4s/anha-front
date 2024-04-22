<script>
    import { website } from '$lib/config/website.js'
	import { page } from '$app/stores';
	import { PUBLIC_CANONICAL_ORIGIN } from '$env/static/public';
	import SeoComponent from '$lib/SEO/index.svelte';

    import Header from "$lib/parts/Header.svelte";
    import Footer from "$lib/parts/Footer.svelte";
    import '$lib/scss/style.scss';

    export let data;
    $: ({menuItems, menuItemsSecondary, seoConfig } = data)

    $: console.log('seoConfig: ', seoConfig)
    $: console.log('website config: ', $website)

    $: {
        $website.author = seoConfig.seo.schema.companyName
        $website.ogLanguage = seoConfig.seo.schema.inLanguage
        $website.siteLanguage = seoConfig.seo.schema.inLanguage
        $website.siteTitle = seoConfig.generalSettings.title
        $website.siteShortTitle = seoConfig.generalSettings.title
        $website.description = seoConfig.generalSettings.description
        $website.siteUrl = seoConfig.seo.schema.siteUrl
        $website.backgroundColor = ""
        $website.themeColor = ""
        $website.contactEmail = ""
        $website.facebookPage = seoConfig.seo.social.facebook.url
        $website.linkedinProfile = seoConfig.seo.social.linkedIn.url
        $website.twitterUsername = seoConfig.seo.social.twitter.username
    }
</script>


<Header {menuItems} {menuItemsSecondary}/>


<SeoComponent
	url={$page.url}
	canonical_origin={PUBLIC_CANONICAL_ORIGIN}
	data={{ 
        title: $website.siteTitle, 
        description: seoConfig.description, 
        canonical_url: seoConfig.homeUrl, 
        logo: seoConfig.logo
    }}
/>


<main>
    <slot />
</main>


<Footer />


