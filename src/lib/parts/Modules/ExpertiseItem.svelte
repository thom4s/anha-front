
<script>
    import BlocTitreVisuelTexte from '$lib/parts/Modules/BlocTitreVisuelTexte.svelte';
    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';

    export let chapo = '';
    export let visuel = '';
    export let design = 'left';
    export let flexibleContents = '';
    export const position = '';


    $: console.log("Module Projets: ", flexibleContents)
</script>


    <section id="r0" class="fl-column-space fl-center">

        <BlocTitreVisuelTexte visuel={visuel} texte={chapo} {design} /> 
  
    </section>

    {#each flexibleContents as layout, i}
        
        {#if layout && layout.__typename }

            <FlexibleLayouts {layout} />

        {/if}
    {/each}

<style lang="scss">

    section {
        &:first-child {
            min-height: calc(100vh - 120px);
        }
    }

</style>