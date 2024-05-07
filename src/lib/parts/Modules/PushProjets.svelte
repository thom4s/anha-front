<script>
	import BlockProjet from '$lib/parts/Elements/BlockProjet.svelte';
    
    import { register } from 'swiper/element/bundle';
    register();

    export let titre = '';
    export let pages = [];
</script>

<section class="module">

    <div class="module_title">
        <h2>{titre}</h2>
    </div>

    {#if pages && pages.length > 0}

        <swiper-container   
            navigation={true}
            space-between="40" 
            slides-per-view="2.5" 
            speed="500" 
            direction="horizontal"
        >

            {#each pages as projet }
                <swiper-slide class="swiper-slide">
                    <BlockProjet {projet} />
                </swiper-slide>
            {/each}

        </swiper-container >


    {/if}


</section>

<style lang="scss">
    .module {
        margin: 40px 0;
    }
    .module_title {
        border-bottom: 1px solid;
        margin-bottom: 20px;
    }
    .logos {
        display: flex;
        gap: 20px;

        img { 
            object-fit: contain;
        }
    }
</style>