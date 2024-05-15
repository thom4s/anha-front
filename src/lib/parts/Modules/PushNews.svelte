<script>
    import BlockPost from "$lib/Parts/Elements/BlockPost.svelte";
    export let titre = '';
    export let pages = [];

</script>

<section class="module">

    <h2>{titre}</h2>

    {#if pages && pages.length > 0}
        {#each pages as post }
             <BlockPost {post} />
        {/each}
    {/if}


</section>

<style lang="scss">
    .module {
        margin: 40px 0;
    }
    .logos {
        display: flex;
        gap: 20px;

        img { 
            object-fit: contain;
        }
    }
</style>