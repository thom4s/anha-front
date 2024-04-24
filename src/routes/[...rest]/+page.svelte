<script lang="ts">
    import Rebonds from '$lib/parts/Layouts/Rebonds.svelte';
    import PagesList from '$lib/parts/Layouts/PagesList.svelte';

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)
    // $: console.log( 'Flexible: ', page.contenusFlexibles?.contenusFlexibles  )
    // $: console.log( 'Page: ', page  )
</script>

<div class="container">
    {#if page}
        <h1>{page.title}</h1>
        <div>{@html page.content}</div>

        {#if page.contenusFlexibles.contenusFlexibles }
            {#each page.contenusFlexibles?.contenusFlexibles as layout}
                {#if layout.fieldGroupName === 'ContenusFlexiblesContenusFlexiblesRebondsLayout'}
                    <Rebonds titre={layout.titre} pages={layout.page.nodes}/>
                {:else if layout.fieldGroupName === 'ContenusFlexiblesContenusFlexiblesListePagesLayout'}
                    <PagesList titre={layout.titre} pages={layout.pages.nodes}/>
                {/if}
            {/each}
        {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>