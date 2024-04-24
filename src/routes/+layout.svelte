<script>
    import SEO from '$lib/parts/SEO/index.svelte';

    import { website } from '$lib/config/website.js'
    import { page } from '$app/stores';
    import Header from "$lib/parts/Header.svelte";
    import Footer from "$lib/parts/Footer.svelte";
    import '$lib/scss/style.scss';

    export let data;
    $: ({menuItems, menuItemsSecondary, seoConfig } = data)

    //$: console.log('seoConfig: ', seoConfig)
    //$: console.log('website config: ', $website)
    $: console.log('$page: ', $page)

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

    /*
     * SEO STUFFS
     */
    $: title = $page.data.page.title;
	$: metadescription = $page.data.page.seo.metaDesc;
	$: keywords = $page.data.page.seo.metaKeywords;
	$: slug = $page.data.page.uri;

	$: breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
        {
			name: $page.data.page.title,
			slug: $page.data.page.slug,
		},
	];

	$: seoProps = {
		breadcrumbs,
        keywords,
		title,
		metadescription,
		slug,
		datePublished: $page.data.page.date,
		lastUpdated: $page.data.page.modified,
        timeToRead: $page.data.page.seo.timeToRead
	};
    // END SEO STUFFS

</script>

<SEO {...seoProps} />


<Header {menuItems} {menuItemsSecondary}/>

<main>
    <slot />
</main>

<Footer />


