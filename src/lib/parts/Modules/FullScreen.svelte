<script lang="ts">
    import { register } from 'swiper/element/bundle';
    register();

    import { fade } from 'svelte/transition';
	import Close from '../Svgs/Close.svelte';


    export let content = '';
    export let type = '';
    export let fullscreen = '';

</script>


    <div class="fullscreen fl-center" transition:fade={{ duration: 100 }} data-module="fullscreen">

        <button 
            class="btn_clean"
            on:click={() => {
                fullscreen = false;
                content = '';
                type = '';
            }}
        >
        <Close /></button>  

        {#if type === 'image'}
            <img src="{content}" alt="">

        {:else if type === 'video'}
            {@html content}

        {:else if type === 'slide'}
            <swiper-container 
                space-between="0" 
                slides-per-view="auto" 
                init="true"
                navigation={true}
                pagination={true}
                loop="true"
            >
                {#each content.nodes as img }
                    <swiper-slide class="swiper-slide">
                        <img src="{img.sourceUrl}" alt="">
                    </swiper-slide>
                {/each}
            </swiper-container >
        {/if}
    </div>


<style lang="scss"> 
    .fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($white, .99);
        z-index: 9;
    }

    button {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 99;
        color: white;
    }

    swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        object-fit: contain;
        max-width: 80vw;
        max-height: 80vh;
    }
    .btn_clean {
        width: 30px;
        height: 30px;
    }


</style>