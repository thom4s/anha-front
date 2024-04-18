<script lang="ts">
    import BlockPost from "$lib/parts/BlockPost.svelte";

    export let data: {
        posts: Promise<void>;
    }
    $: ({posts} = data)
    $: console.log(posts)

</script>


<div class="container">

    <h1>Les News</h1>

    {#each posts.nodes as post }
        <BlockPost {post} type="posts"/>
    {/each}

</div>

