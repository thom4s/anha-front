<script lang="ts">
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    
    export let page = {};
    export let posts = [];

</script>


<article>
    <h1>{page.title}</h1>
    <div>{@html page.content}</div>

    {#each posts.nodes as post }
        <BlockPost {post} type="posts"/>
    {/each}
</article>


<style lang="scss">

</style>