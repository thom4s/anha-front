<script lang="ts">

    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'
    import Form from '$lib/parts/Forms/Form.svelte';

    import BlockPost from "$lib/parts/BlockPost.svelte";

    export let data: {
        offres: Promise<void>;
    }
    $: ({offres} = data)
    $: console.log(offres)
    let loading = false;

    /*
     * SEO STUFFS
     */
    $: title = 'Offres';
	$: metadescription = '';

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

    <h1>Offres d'emploi</h1>

    <div class="grid">
        <div class="s_6column">
            {#each offres.nodes as post }
                <BlockPost {post} type="offres"/>
            {/each}
        </div>
    
        <div class="s_6column">

            <h2>Postuler</h2>

            <Form />

        </div>
    </div>  
</div>