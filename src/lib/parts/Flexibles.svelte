<script>
    import PushPages from '$lib/parts/Modules/PushPages.svelte';
    import PagesList from '$lib/parts/Modules/PagesList.svelte';

    export let contenusFlexibles = [];
</script>


{#each contenusFlexibles as layout}
    {#if layout.fieldGroupName === 'ContenusFlexiblesContenusFlexiblesRebondsLayout'}
        <PushPages titre={layout.titre} pages={layout.page?.nodes}/>
    {:else if layout.fieldGroupName === 'ContenusFlexiblesContenusFlexiblesListePagesLayout'}
        <PagesList titre={layout.titre} pages={layout.pages?.nodes}/>
    {/if}
{/each}