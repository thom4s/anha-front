<script lang="ts">
    import { register } from 'swiper/element/bundle';
    register();

    export let content = '';
    export let type = '';
    export let fullscreen = '';

</script>


    <div class="fullscreen fl-center">

        <button on:click={() => {
            fullscreen = false;
            content = '';
            type = '';
        }}>
        Close</button>  

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
        background-color: rgba(0, 0, 0, .8);
        z-index: 9;
    }

    button {
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>