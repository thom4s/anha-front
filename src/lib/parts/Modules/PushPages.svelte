<script>
    import BlockPage from "$lib/parts/Elements/BlockPage.svelte";
    export const titre = '';
    export let pages = [];
</script>

<section class="module container">

    <!-- <h2>{titre}</h2> -->

    {#if pages && pages.length > 0}
        {#each pages as post }
            <BlockPage {post} />
        {/each}
    {/if}


</section>

<style lang="scss">
    .module {
        margin-top: 180px;
        margin-bottom: 180px;
    }
</style>