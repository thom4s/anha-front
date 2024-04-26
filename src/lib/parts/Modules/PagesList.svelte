<script>
    import { lang } from "$lib/config/website";
    export let titre = '';
    export let pages = [];
    $: console.log('Liste pages', pages)

</script>

<h2>{titre}</h2>

{#if pages && pages.length > 0}
    {#each pages as page }
        <a href="{page.uri}">{page.title}</a>
    {/each}
{/if}