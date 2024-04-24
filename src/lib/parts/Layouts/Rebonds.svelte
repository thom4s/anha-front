<script>
    export let titre = '';
    export let pages = {};
    $: console.log('Rebonds page', pages)
</script>

<h2>{titre}</h2>

{#each pages as page }
    <a href="{page.uri}">{page.title}</a>
{/each}