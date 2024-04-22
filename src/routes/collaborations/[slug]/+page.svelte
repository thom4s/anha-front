
<script lang="ts">
    import SEO from '$lib/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    export let data: {
        collaboration: Promise<void>;
    }
    $: ({collaboration} = data)

    /*
     * SEO STUFFS
     */
    $: title = collaboration.title;
	$: metadescription = collaboration.excerpt;

	$: breadcrumbs = [
		{
			name: 'Home',
			slug: '',
		},
        {
			name: 'Collaborations',
			slug: '/collaborations',
		},
        {
			name: collaboration.title,
			slug: '',
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
    {#if collaboration}
        <h1>{collaboration.title}</h1>
        <div>{@html collaboration.content}</div>
    {:else}
        <p>No content</p>
    {/if}
</div>