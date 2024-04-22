<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';
    import { website } from '$lib/config/website.js'


    export let data: {
        offre: Promise<void>;
    }
    $: ({offre} = data)

    /*
     * SEO STUFFS
     */
    $: title = offre.title;
	$: metadescription = offre.excerpt;

	$: breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
        {
			name: 'Offres',
			slug: '/offres',
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
    {#if offre}
        <h1>{offre.title}</h1>
        <div>{@html offre.content}</div>
    {:else}
        <p>No content</p>
    {/if}
</div>