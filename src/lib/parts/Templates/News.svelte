<script lang="ts">
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    
    export let page = {};
    export let posts = [];

</script>


<article>

    <div class="grid">

        <div class="m_4column">
            <h1>{page.title}</h1>
            <div>{@html page.content}</div>
        </div>

        <div class="m_8column">
            {#each posts.nodes as post }
                <BlockPost {post} type="posts"/>
            {/each}
        </div>

    </div>

</article>


<style lang="scss">

</style>