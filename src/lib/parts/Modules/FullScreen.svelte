<script lang="ts">
    import { register } from 'swiper/element/bundle';
    register();

    import { fade } from 'svelte/transition';
	import IconClose from '$lib/parts/Svgs/IconClose.svelte';
	import IconArrowRight from '$lib/parts/Svgs/IconArrowRight.svelte';
	import IconArrowLeft from '$lib/parts/Svgs/IconArrowLeft.svelte';


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
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    el: '.swiper-pagination',
                    type: 'bullets',
                }}
                loop={true}

            >
                {#each content.nodes as img }
                    <swiper-slide class="swiper-slide">
                        <img src="{img.sourceUrl}" alt="">
                    </swiper-slide>
                {/each}
            </swiper-container >


            <div class="container swiper-utils">
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev">
                    <IconArrowLeft />
                </div>
                <div class="swiper-button-next">
                    <IconArrowRight />
                </div>
            </div>

            
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


</style>