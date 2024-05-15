<script>
    import FullScreen from '$lib/parts/Modules/FullScreen.svelte';
    import arrowfull from '$lib/assets/svg/arrowfull.svg';

    import { fade } from 'svelte/transition';
    export let post = {};
    export let type = '';
    import { register } from 'swiper/element/bundle';
    register();

    let fullscreen = false;
    let fullScreenContent = '';
    let fullScreenType = '';
    
</script>


<article class="block_post" transition:fade={{ duration: 200 }}>

    <div class="fl-justify gap-m">

        <div class="half">

            <div class="bloc_texts">
                <div class="fl-justify fl-vtop">  
                    <div>{post.informationsNews?.date}</div>
                    <div>{@html post.informationsNews?.lieu}</div>
                </div>
                
                <div class="">  
                    <h2>{post.title}</h2>
                    <div>{@html post.content}</div>
                </div>
                
                {#if post.informationsNews?.lien }
                    <a href="{post.informationsNews?.lien}">
                        {post.informationsNews?.label}
                    </a>
                {/if}
            </div>
        </div>

        <div class="half">
            <div class="bloc_media">
                {#if post.informationsNews?.video}

                    <div 
                        class="trigger"
                        aria-roledescription=""
                        on:click={ () => {
                            fullscreen = true;
                            fullScreenContent = post.informationsNews?.video;
                            fullScreenType= 'video';
                        }}>
                        {@html post.informationsNews?.video}
                    </div>
                {:else if post.informationsNews?.galery }

                    <swiper-container 
                        space-between="0" 
                        slides-per-view="auto" 
                        init="true"
                        navigation={true}
                        loop="true"
                    >
                        {#each post.informationsNews?.galery.nodes as img }
                            <swiper-slide class="swiper-slide">
                                <img 
                                    src="{img.sourceUrl}" 
                                    alt=""
                                    on:click={ () => {
                                        fullscreen = true;
                                        fullScreenContent = post.informationsNews?.galery;
                                        fullScreenType= 'slide';
                                    }}>
                            </swiper-slide>
                        {/each}
                    </swiper-container >

                {:else}
                    <img 
                        src="{post.featuredImage?.node?.sourceUrl}" 
                        alt=""
                        on:click={ () => {
                            fullscreen = true;
                            fullScreenType = 'image';
                            fullScreenContent = post.featuredImage?.node?.sourceUrl
                        }}>
                {/if}
            </div>
        </div>

    </div>

</article>

{#if fullscreen }
    <FullScreen bind:fullscreen={fullscreen} type={fullScreenType} content={fullScreenContent} />
{/if}

<style lang="scss"> 
    .block_post {
        border-top: 1px solid;
        border-bottom: 1px solid;
        padding: 20px 0;

        &:nth-child(2n) {
            .grid {
                grid-auto-flow: dense;
                direction: rtl;
            }
        }
        .bloc_texts {
            direction: ltr;
        }
    }
    .half {
        width: 50%;
    }
    img:hover {
        cursor: zoom-in;
        cursor: url('$lib/assets/svg/arrowfull.svg'), auto;
    }
</style>