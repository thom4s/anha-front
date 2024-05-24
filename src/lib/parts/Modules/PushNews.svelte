<script>
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    export let titre = '';
    export let pages = [];
    let module = true;
    
</script>

<section class="module container">

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
    .logos {
        display: flex;
        gap: 20px;

        img { 
            object-fit: contain;
        }
    }
</style>