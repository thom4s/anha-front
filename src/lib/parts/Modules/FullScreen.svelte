<script lang="ts">
    import { register } from 'swiper/element/bundle';
    register();

    import { fade } from 'svelte/transition';
	import IconClose from '$lib/parts/Svgs/IconClose.svelte';
	import IconArrowRight from '$lib/parts/Svgs/IconArrowRight.svelte';
	import IconArrowLeft from '$lib/parts/Svgs/IconArrowLeft.svelte';

    import { fullScreenContent, fullScreenType } from '$stores/fullscreen.js';
    export let content = $fullScreenContent;
    export let type = $fullScreenType;
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
        <IconClose /></button>  

        {#if type === 'image'}
            <img src="{content}" alt="">

        {:else if type === 'video'}
            {@html content}

        {:else if type === 'slide'}
            <swiper-container 
                spaceBetween={30}
                slidesPerView={1.5}
                centeredSlides={true}
                init={true}
                navigation={true}
                pagination={true}
                loop={true}

            >
                {#if content.nodes}
                    {#each content.nodes as img }
                        <swiper-slide class="swiper-slide">
                            <img src="{img.sourceUrl}" alt="">
                        </swiper-slide>
                    {/each}
                {:else}
                    {#each content as src }
                        <swiper-slide class="swiper-slide">
                            <img src="{src}" alt="">
                        </swiper-slide>
                    {/each}
                {/if}
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
        display: flex;
        align-items: center;
    }
    .swiper-slide{
        display: flex;
        justify-content: center;
        align-self: center;
    }
    img {
        object-fit: contain;
        // max-width: 80vw;
        max-height: 80vh;
    }
    .btn_clean {
        width: 30px;
        height: 30px;
    }

    .swiper-utils {
        position: absolute;
        bottom: $space-l;
    }
    .swiper-pagination {
        position: absolute;
        bottom: $gutter;
    }


    swiper-container {
        --swiper-theme-color: #ababab;
        --swiper-navigation-size: 22px;
        --swiper-navigation-color: $gray;
        --swiper-navigation-top-offset: auto;
        --swiper-navigation-sides-offset: 30vw;
        --swiper-pagination-color: #92a4ae;
        --swiper-pagination-bullet-border-radius: 6px;
        --swiper-pagination-bullet-horizontal-gap: 4px;
        --swiper-pagination-bullet-vertical-gap: 4px;
        --swiper-pagination-bullet-size: px;
        --swiper-pagination-bullet-width: 6px;
        --swiper-pagination-bullet-height: 6px;
        --swiper-pagination-bullet-opacity: 1;
        --swiper-pagination-bullet-inactive-color: #254a5d;
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-bottom: 0rem;
        --swiper-preloader-color: var(--swiper-theme-color);
    }

    swiper-container {
        overflow-y: visible;
    }

    swiper-container::part(bullet) {
        /* styles */
    }

    swiper-container::part(bullet-active) {
        /* styles */
    }

    swiper-container::part(pagination) {
        bottom: -30px;
        z-index: 5;
    }

    swiper-container::part(container) {
        /* styles */
    }

    swiper-container::part(button-prev),
    swiper-container::part(button-next) {
        z-index: 999;
        bottom: -35px;
    }


</style>