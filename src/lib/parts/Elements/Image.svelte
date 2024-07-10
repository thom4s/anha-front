<script>
    import { fullScreenContent, fullScreenType } from '$stores/fullscreen.js';
    import { navigating } from '$app/stores';
    
    // DATAS
    export let node = {}
    export let parallax = false
    export let hoverTarget = false
    export let fullscreened = false
    export let includeThis = false
    let imgElement

    if( includeThis && ! $fullScreenContent.includes(node.sourceUrl)) {
        $fullScreenContent = [... $fullScreenContent, node.sourceUrl]
    }

    $: console.log('navigating', $navigating)

    // DISPATCH ON CLICK
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();


    // PARALLAX
    import Ukiyo from "ukiyojs";
    import { onMount } from 'svelte';

    onMount(() => {
        if(parallax) {
            new Ukiyo(imgElement, {
                scale: 1.1,
                speed: 1.5,
                wrapperClass: 'parallax_outer'
            })
        }
    })

</script>


<div class="media_container">
    <img 
        src="{node?.sourceUrl}" 
        alt="{node?.caption}"
        srcset="{node?.srcSet}"
        sizes="{node?.sizes}" 
        bind:this={imgElement}

        class:parallax={parallax}
        class:clickable={fullscreened}
        class:hover-target={hoverTarget}
        on:click={ () => dispatch('imageClicked') } 
    />
</div>

<style lang="scss">
    .media_container {
        width: 100%;
    }

    // .clickable:hover {
    //     cursor: zoom-in;
    //     cursor: url('$lib/assets/svg/arrowfull.svg'), auto;
    // }
</style>