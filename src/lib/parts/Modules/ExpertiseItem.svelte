
<script>
    import BlocTitreVisuelTexte from '$lib/parts/Modules/BlocTitreVisuelTexte.svelte';
    import BlockProjet from "$lib/parts/Elements/BlockProjet.svelte";

    export let chapo = '';
    export let flexibleContents = '';
    export let position = '';


    $: console.log("Module Projets: ", flexibleContents)
</script>


    <section id="r0" class="fl-column-space fl-center chapo">
        <span></span>
        {@html chapo} 
        <svg width="20" height="61" viewBox="0 0 20 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0.940002L10 59.3855" stroke="black" stroke-linecap="square"/>
            <path d="M1 50.94L10 59.94L19 50.94" stroke="black" stroke-linecap="square"/>
        </svg>    
    </section>

    {#each flexibleContents as layout, i}
        
        {#if layout && layout.__typename }

            <section id="{`r${i+1}`}">
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
        padding: 60px;
        min-height: calc(100vh - 120px);
    }


</style>