<script>
    import BlockPost from "$lib/parts/Blocks/BlockPost.svelte";
    export let titre = '';
    export let design = 'left';
    export let layout = 'left';
    export let pages = [];
    let module = true;

</script>

<section class="module mod_pushnews container start-{design} ">

    {#if pages && pages.length > 0}
        {#each pages as post }
             <BlockPost {post} {module} />
        {/each}
    {/if}


</section>

<style lang="scss">
    .module {
        margin-top:  $space-wide;
        margin-bottom:  $space-wide;
    }
    

</style>