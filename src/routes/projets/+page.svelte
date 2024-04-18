<script lang="ts">
    import BlockPost from "$lib/parts/BlockPost.svelte";

    export let data: {
        projets: Promise<void>;
    }
    $: ({projets} = data)
    $: console.log(projets)

</script>

<div class="container">

    <h1>Les projets</h1>

    {#each projets.nodes as post }
        <BlockPost {post} type="projets"/>
    {/each}

</div>