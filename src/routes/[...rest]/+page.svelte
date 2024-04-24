<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'
    import Rebonds from '$lib/parts/Layouts/Rebonds.svelte';
    import PagesList from '$lib/parts/Layouts/PagesList.svelte';

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)
    $: console.log( 'Flexible: ', page.contenusFlexibles?.contenusFlexibles  )
    $: console.log( 'Page SEO: ', page.seo  )
    $: console.log( 'Page: ', page  )


    /*
     * SEO STUFFS
     */
    $: title = page.title;
	$: metadescription = page.seo.metaDesc;
	$: keywords = page.seo.metaKeywords;
	$: slug = page.slug;

	$: breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
        {
			name: page.title,
			slug: page.slug,
		},
	];

	$: seoProps = {
		breadcrumbs,
        keywords,
		title,
		metadescription,
		slug,
		datePublished: page.date,
		lastUpdated: page.modified,
        timeToRead: page.seo.timeToRead
	};
    // END SEO STUFFS


</script>

<SEO {...seoProps} />


<div class="container">
    {#if page}
        <h1>{page.title}</h1>
        <div>{@html page.content}</div>

        {#if page.contenusFlexibles.contenusFlexibles }
            {#each page.contenusFlexibles?.contenusFlexibles as layout}
                {#if layout.fieldGroupName === 'ContenusFlexiblesContenusFlexiblesRebondsLayout'}
                    <Rebonds titre={layout.titre} pages={layout.page.nodes}/>
                {:else if layout.fieldGroupName === 'ContenusFlexiblesContenusFlexiblesListePagesLayout'}
                    <PagesList titre={layout.titre} pages={layout.pages.nodes}/>
                {/if}
            {/each}
        {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>