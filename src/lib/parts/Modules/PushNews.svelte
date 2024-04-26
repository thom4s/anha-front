<script>
    import { lang } from "$lib/config/website";
    export let titre = '';
    export let pages = [];

    $: console.log('Push News', pages)
</script>

<section class="module">

    <h2>{titre}</h2>

    {#if pages && pages.length > 0}
        {#each pages as page }
            <a href="{page.link}">{page.title}</a>
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