<script>
    export let titre = '';
    export let pages = [];
    $: console.log('Rebonds Contact', pages)
</script>

<h2>{titre}</h2>

{#if pages && pages.length > 0}
    {#each pages as page }
        <a href="/{page.uri}">{page.title}</a>
    {/each}
{/if}