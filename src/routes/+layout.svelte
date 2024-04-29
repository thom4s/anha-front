<script>
    import SEO from '$lib/parts/SEO/index.svelte';

    import { config, activeLang } from '$lib/config/website.js'
    import Header from "$lib/parts/Navigations/Header.svelte";
    import Footer from "$lib/parts/Navigations/Footer.svelte";
    import '$lib/scss/style.scss';

    export let data;
    $: ({menuItems, menuItemsSecondary, seoConfig, langs, currentLang } = data)
    
    $: $activeLang = currentLang;

    $: {
        $config.author = seoConfig.seo.schema.companyName
        $config.ogLanguage = seoConfig.seo.schema.inLanguage
        $config.siteLanguage = seoConfig.seo.schema.inLanguage
        $config.siteTitle = seoConfig.generalSettings.title
        $config.siteShortTitle = seoConfig.generalSettings.title
        $config.description = seoConfig.generalSettings.description
        $config.siteUrl = seoConfig.seo.schema.siteUrl
        $config.backgroundColor = ""
        $config.themeColor = ""
        $config.contactEmail = ""
        $config.facebookPage = seoConfig.seo.social.facebook.url
        $config.linkedinProfile = seoConfig.seo.social.linkedIn.url
        $config.twitterUsername = seoConfig.seo.social.twitter.username
    }
</script>

<SEO />

<Header {menuItems} {menuItemsSecondary} {langs}/>

<main>
    <slot />
</main>

<Footer {menuItemsSecondary} />


