<script>
    // DATAS
    export let node = {}
    export let parallax = false
    export let fullscreened = false


    // DISPATCH ON CLICK
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();


    // PARALLAX
    import Ukiyo from "ukiyojs";
    import { onMount } from 'svelte';

    onMount(() => {
        new Ukiyo(".parallax", {
            scale: 1.1,
            speed: 1.5,
            wrapperClass: 'parallax_outer'
        })
    })

</script>


<div class="media_container">
    <img 
        src="{node.sourceUrl}" 
        alt="{node.caption}"
        srcset="{node.srcSet}"
        sizes="{node.sizes}" 

        class:parallax={parallax}
        class:clickable={fullscreened}
        on:click={ () => dispatch('imageClicked') } 
    />
</div>

<style lang="scss">
    .media_container {
        width: 100%;
    }

    .clickable:hover {
        cursor: zoom-in;
        cursor: url('$lib/assets/svg/arrowfull.svg'), auto;
    }
</style>