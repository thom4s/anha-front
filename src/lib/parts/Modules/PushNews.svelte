<script>
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    export const titre = '';
    export let pages = [];
    let module = true;
    
</script>

<section class="module mod_pushnews container">

    <!-- <h2>{titre}</h2> -->

    {#if pages && pages.length > 0}
        {#each pages as post }
             <BlockPost {post} {module} />
        {/each}
    {/if}


</section>

<style lang="scss">
    .module {
        margin-top: 180px;
        margin-bottom: 180px;
    }
</style>