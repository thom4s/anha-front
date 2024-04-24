<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    import BlockPost from "$lib/parts/BlockPost.svelte";
    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations} = data)
    $: console.log(collaborations)

    /*
     * SEO STUFFS
     */
    $: title = 'Collaborations';
	$: metadescription = '';

	const breadcrumbs = [
		{
			name: 'Home',
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

    <h1>Collaborations</h1>

    {#each collaborations.nodes as post }
        <BlockPost {post} type="collaborations"/>
    {/each}

</div>

