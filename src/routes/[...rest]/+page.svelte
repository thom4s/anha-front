<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';
    import { website } from '$lib/config/website.js'
    import Rebonds from '$lib/parts/Layouts/Rebonds.svelte';
    import PagesList from '$lib/parts/Layouts/PagesList.svelte';

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)
    $: console.log( 'Flexible: ', page.contenusFlexibles?.contenusFlexibles  )


    /*
     * SEO STUFFS
     */
    $: title = page.title;
	$: metadescription = page.excerpt;

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
		title,
		metadescription,
		slug: '',
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100',
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