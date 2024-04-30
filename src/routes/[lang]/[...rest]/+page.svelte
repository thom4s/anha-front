<script lang="ts">
    import Projets from '$lib/parts/Templates/Projets.svelte';
    import News from '$lib/parts/Templates/News.svelte';
    import Page from '$lib/parts/Templates/Page.svelte';
    import Post from '$lib/parts/Templates/Post.svelte';


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
                <Projets {page} {projets} {savoirfaires} {secteurs} />
                
            {:else if page.template.templateName === 'Actualités'}
                <News {page} {posts} />

            {:else}
                <Page {page} {posts} />

            {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>