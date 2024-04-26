<script lang="ts">
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations, page} = data)
</script>




<div class="container">

    <h1>{page.title}</h1>
    <div>{@html page.content}</div>

    {#each collaborations.nodes as post }
        <BlockPost {post} type="collaborations"/>
    {/each}

</div>

