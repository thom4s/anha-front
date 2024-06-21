
<script>
    import BlocTitreVisuelTexte from '$lib/parts/Modules/BlocTitreVisuelTexte.svelte';
    import BlockProjet from "$lib/parts/Elements/BlockProjet.svelte";

    export let chapo = '';
    export let visuel = '';
    export let design = 'left';
    export let flexibleContents = '';
    export const position = '';


    $: console.log("Module Projets: ", flexibleContents)
</script>


    <section id="r0" class="container fl-column-space fl-center">

        <BlocTitreVisuelTexte visuel={visuel} texte={chapo} {design} /> 
  
    </section>

    {#each flexibleContents as layout, i}
        
        {#if layout && layout.__typename }

            <section id="{`r${i+1}`}" class="container">
                {#if 
                    layout.__typename === 'ContenusSavoirFaireLeftColFlexibleContentsBlocTitreVisuelTexteLayout' 
                    || layout.__typename === 'ContenusSavoirFaireRightColFlexibleContentsBlocTitreVisuelTexteLayout' }

                    <BlocTitreVisuelTexte titre={layout.titre} visuel={layout.visuel} texte={layout.texte} /> 
                
                {/if}


                {#if 
                    layout.__typename === 'ContenusSavoirFaireLeftColFlexibleContentsPushprojetsLayout' 
                    || layout.__typename === 'ContenusSavoirFaireRightColFlexibleContentsPushprojetsLayout' }

                        <h2 class="h2">{layout.titre}</h2>

                        {#if layout.projets?.nodes && layout.projets?.nodes.length > 0}
                            {#each layout.projets.nodes as projet}
                                <BlockProjet projet={projet}/>
                            {/each}
                        {/if}
                {/if}

            </section>

        {/if}
    {/each}

<style lang="scss">

    section {
        &:first-child {
            min-height: calc(100vh - 120px);
        }
    }

</style>