<script lang="ts">
    import Projet from '$lib/parts/Templates/Projet.svelte';
    import News from '$lib/parts/Templates/News.svelte';
    import Page from '$lib/parts/Templates/Page.svelte';

    export let data: {
        page: Promise<void>;
        posts: Promise<void>;
        projets: Promise<void>;
        savoirfaires: Promise<void>;
        secteurs: Promise<void>;
    }

    $: ({page, posts, projets, savoirfaires, secteurs} = data)

    $: console.log( 'Page: ', page  )

</script>

<div class="container">
    {#if page}

        {#if page.template.templateName === 'Projets'}

            <Projet {page} {projets} {savoirfaires} {secteurs} />
            
        {:else if page.template.templateName === 'Actualités'}

            <News {page} {posts} />

        {:else}

            <Page {page} {posts} />

        {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>