<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    import BlockPost from "$lib/parts/BlockPost.svelte";

    export let data: {
        posts: Promise<void>;
        page : Promise<void>;
    }
    $: ({page, posts} = data)
    $: console.log(posts)

</script>

<div class="container">

    <h1>{page.title}</h1>
    <div>{@html page.content}</div>

    {#each posts.nodes as post }
        <BlockPost {post} type="posts"/>
    {/each}

</div>

