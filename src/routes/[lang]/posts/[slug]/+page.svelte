<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'


    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

</script>

<div class="container">

    <h1>{page.title}</h1>
    <div>Auteur : {@html page.author.node.name}</div>

    {#if page.featuredImage}
        <img src="{page.featuredImage.node.sourceUrl}" srcset={page.featuredImage.node.srcSet} sizes="{page.featuredImage.node.sizes}" alt="{page.featuredImage.node.altText}" />
    {/if}

    <div>{@html page.content}</div>

</div>
