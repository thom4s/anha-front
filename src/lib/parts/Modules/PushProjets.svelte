<script>
	import BlockProjet from '$lib/parts/Elements/BlockProjet.svelte';
	import { onMount } from 'svelte';
    
    import { register } from 'swiper/element/bundle';

    export let titre = '';
    export let label = '';
    export let link = '';
    export let pages = [];

    onMount( async () => {
        register();

    });
</script>

<section class="module container">

    <div class="module_title fl-justify gap-s">
        <div class="fl-center gap-s">
            <h2 class="h2 no-margin">{titre}</h2>
            <div class="swiper-navigation fl-vcenter">
                <div class="swiper-button-prev-out">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 26.377L10 16.377L20 6.377" stroke="black" stroke-linecap="square"/>
                    </svg>                    
                </div>
                <div class="swiper-button-next-out">
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.62305L22 16.623L12 26.623" stroke="black" stroke-linecap="square"/>
                    </svg>    
                </div>
            </div>
        </div>

        <a class="link" href="{link.nodes[0]?.uri}">{label}</a>
    </div>

    {#if pages && pages.length > 0}

        <swiper-container   
            navigation={{
                nextEl: '.swiper-button-next-out',
                prevEl: '.swiper-button-prev-out'
            }}
            space-between="30" 
            slides-per-view="3.5" 
            speed="500" 
            direction="horizontal"
        >

            {#each pages as projet, i }
                <swiper-slide class="swiper-slide project" class:even={i & 1}>
                    <BlockProjet {projet} />
                </swiper-slide>
            {/each}

        </swiper-container >

    {/if}

</section>

<style lang="scss">
    .module {
        margin-top: 180px;
        margin-bottom: 180px;
    }
    .swiper-button-prev-out, .swiper-button-next-out {
        cursor: pointer;
        transition: 0.3s;
        &.swiper-button-disabled {
            opacity: 0.5;
        }
    }
    .module_title {
        border-bottom: 1px solid;
        padding-bottom: 30px;
        margin-bottom: 30px;
        align-items: flex-end;
    }
    .logos {
        display: flex;
        gap: 20px;

        img { 
            object-fit: contain;
        }
    }
</style>