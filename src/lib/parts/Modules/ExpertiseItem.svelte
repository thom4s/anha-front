
<script>
    import BlocTitreVisuelTexte from '$lib/parts/Modules/BlocTitreVisuelTexte.svelte';
    import BlockProjet from "$lib/parts/Elements/BlockProjet.svelte";

    import { slide } from 'svelte/transition';
    import { clickOutside } from '$lib/utils/utils.js';

    import { register } from 'swiper/element/bundle';
    register();

    export let title = '';
    export let chapo = '';
    export let flexibleContents = '';
    export let position = '';

    let showContent = false;
    $: ({projets} = flexibleContents)
$: console.log("Module Projets: ", flexibleContents)
</script>


<div class="{position}">

    <div class="fl-centered colTitle"  on:click={ () => showContent = true }>
        <h2>{title}</h2>
    </div>

    {#if showContent}

                <div 
                    class="colContent" 
                    transition:slide={{ duration: 300, axis: 'x'  }} 
                    use:clickOutside 
                    on:click_outside={ () => showContent = false}
                >

                    <button class="close" on:click={ () => showContent = false }>Close</button>

                    <swiper-container 
                        space-between="0" 
                        slides-per-view="auto" 
                        speed="500" 
                        direction="vertical"
                        sticky="true"
                        mousewheel="true"
                    >
                        <swiper-slide class="swiper-slide">
                            <div>{@html chapo}</div>
                        </swiper-slide>

                        {#each flexibleContents as layout}
                    
                            {#if layout && layout.__typename }

                                {#if layout.__typename === 'ContenusSavoirFaireLeftColFlexibleContentsBlocTitreVisuelTexteLayout'}
                                    <swiper-slide class="swiper-slide">
                                        <BlocTitreVisuelTexte titre={layout.titre} visuel={layout.visuel} texte={layout.texte} /> 
                                    </swiper-slide>
                                {/if}


                                {#if layout.__typename === 'ContenusSavoirFaireLeftColFlexibleContentsPushprojetsLayout'}
                                    <swiper-slide class="swiper-slide">
                                        {layout.titre}
                                        {#if layout.projets?.nodes && layout.projets?.nodes.length > 0}
                                            {#each layout.projets.nodes as projet}
                                                <BlockProjet projet={projet}/>
                                            {/each}
                                        {/if}
                                    </swiper-slide>
                                {/if}

                            {/if}
                        {/each}
                    </swiper-container>
                </div>
                
            {/if}

        </div>

<style lang="scss">

    .colTitle {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .colContent {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 50vw;
    }

    .close {
        position: absolute;
        right: 30px;
        top: 30px;
        z-index: 999;
    }

    .leftCol {
        height: calc(100vh - 115px);
        .colContent {
            right: 0;
        }
    }

    .rightCol {
        height: calc(100vh - 115px);

        .colContent {
            left: 0;
        }
    }



    swiper-container {
        height: 100vh;
    }
    .swiper-slide {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray;
        padding: 20px;
    }
</style>