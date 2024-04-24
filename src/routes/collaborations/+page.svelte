<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    import BlockPost from "$lib/parts/BlockPost.svelte";
    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations, page} = data)
    $: console.log(collaborations)
    $: console.log(page)
</script>




<div class="container">

    <h1>{page.title}</h1>
    <div>{@html page.content}</div>

    {#each collaborations.nodes as post }
        <BlockPost {post} type="collaborations"/>
    {/each}

</div>

