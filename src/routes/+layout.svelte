<script>
    import SEO from '$lib/parts/SEO/index.svelte';
    
    import { config, activeLang, menusStore, langsStore } from '$lib/config/website.js'
    import Header from "$lib/parts/Navigations/Header.svelte";
    import Footer from "$lib/parts/Navigations/Footer.svelte";
    import '$lib/assets/scss/style.scss';

    export let data;
    $: ({menuItemsPrimary, menuItemsSecondary, menuItemsFooter, seoConfig, langs, currentLang, socialLinks } = data)
    
    $: $activeLang = currentLang;
    $: $langsStore = langs;

    $: $menusStore = {
        menuItemsPrimary,
        menuItemsSecondary,
        menuItemsFooter
    }

    
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
        $config.linkedinProfile = socialLinks.linkedin_account
        $config.instagramProfile = socialLinks.instagram_account
        $config.twitterUsername = seoConfig.seo.social.twitter.username
    }
</script>

<SEO />

<Header/>

<main>
    <slot />
</main>

<Footer />


<style>
    :global(header.home.at-top) ~ main {
        margin-top: 325px;
    }
</style>
