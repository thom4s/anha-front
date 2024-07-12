<script>
	import { onMount, tick } from 'svelte';
    import { fullscreen, fullScreenContent, fullScreenType } from '$stores/fullscreen.js';

    import SocialLinks from '../Navigations/SocialLinks.svelte';
    import Image from "../Elements/Image.svelte";
    import Video from '../Elements/Video.svelte';

    import { fade } from 'svelte/transition';
    import { register } from 'swiper/element/bundle';
    register();

    export let module = false;
    export let post = {};
    export let type = '';

    let swiperContainer;
    let prevButton;
    let nextButton;



    $: console.log(post.title, post.informationsNews);

    onMount(async () => {
        register();

        await tick();

        if (swiperContainer ) swiperContainer.initialize();
    });

    $: console.log('prev', prevButton);
    $: console.log('next', nextButton);

    $: console.log('swipContainer', swiperContainer);
</script>

<article class="block_post" class:module={module} transition:fade={{ duration: 200 }}>

    <div class="block_inner fl-justify gap-l">

        <div class="half media">
            <div class="bloc_media">

                {#if post.informationsNews?.video}

                    <Video 
                        videoId={post.informationsNews?.video}
                        plateforme={post.informationsNews?.plateforme}
                    />

                {:else if post.informationsNews?.galery }
                    <div class="slider-container">

                        <swiper-container
                            bind:this={swiperContainer}
                            space-between="0" 
                            slides-per-view="auto" 
                            navigation={{
                                nextEl: nextButton,
                                prevEl: prevButton
                            }}
                            loop="true"
                            init={false}
                        >
                            {#each post.informationsNews?.galery.nodes as node }
                                <swiper-slide class="swiper-slide">
                                    <Image 
                                        node={post.featuredImage?.node} 
                                        parallax={true}
                                        hoverTarget={true}
                                        on:imageClicked={ () => {
                                            $fullscreen = true;
                                            $fullScreenType = 'slide';
                                            $fullScreenContent = post.informationsNews?.galery;
                                        }}/>
                                </swiper-slide>
                            {/each}
                        </swiper-container >
                        <div class="swiper-navigation fl-justify">
                            <div bind:this={prevButton} class="swiper-button-prev-out">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 26.377L10 16.377L20 6.377" stroke="black" stroke-linecap="square"/>
                                </svg>                    
                            </div>
                            <div bind:this={nextButton} class="swiper-button-next-out">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 6.62305L22 16.623L12 26.623" stroke="black" stroke-linecap="square"/>
                                </svg>    
                            </div>
                        </div>
                    </div>

                {:else}

                    <Image 
                        node={post.featuredImage?.node} 
                        parallax={true}
                        hoverTarget={true}
                        ratio="horizontale"
                        on:imageClicked={ () => {
                            $fullscreen = true;
                            $fullScreenType = 'image';
                            $fullScreenContent = post.featuredImage?.node.sourceUrl;
                        }}/>
                {/if}
            </div>
        </div>

        <div class="half texts">

            <div class="bloc_texts ">
                <div class="fl-justify fl-vtop">  
                    <div class="caption">{post.informationsNews?.date}</div>
                    <div class="caption">{@html post.informationsNews?.lieu}</div>
                </div>
                
                <div class="fl-column-start gap-s">  
                    <h3 class="h3 mb-small">{@html post.title}</h3>

                    {#if post.content }
                        <div class="body">{@html post.content}</div>
                    {/if}
                    
                    {#if module }
                        {#if post.informationsNews?.lien }
                            <a class="link" href="{post.informationsNews?.lien}">
                                {post.informationsNews?.labelDuLien}
                            </a>
                        {/if}
                    {/if}
                </div>

                {#if module }
                    <div class="fl-justify vbot gap-s">
                        <p class="caption txt-left">Retrouvez tous nos événements sur nos réseaux sociaux</p>
                        <SocialLinks />
                    </div>

                {:else}
                    {#if post.informationsNews?.lien }
                        <a class="link" href="{post.informationsNews?.lien}">
                            {post.informationsNews?.labelDuLien}
                        </a>
                    {:else}
                        <span></span>
                    {/if}
                {/if}
                
            </div>
        </div>

    </div>

</article>


<style lang="scss"> 

    .block_post {

        &:not(.module):nth-child(odd) .half.texts {
            @include min(tablet) {
                order: -1;
            }
        }
        .half.texts {
            @include max(tablet) {
                order: -1;
            }
        }
        &:nth-child(2n) {
            .grid {
                grid-auto-flow: dense;
                direction: rtl;
            }
        }
        .half.media {
            @include min(tablet) {
                width: 45%;
            }
        }
        .half.texts {
            @include min(tablet) {
                width: 55%;
            }
        }

        .bloc_texts {
            direction: ltr;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            gap: 30px;
        }
        .bloc_media {
            width: 100%;
            height: 100%;
            img {
                width: inherit;
                height: inherit;
                aspect-ratio: 5/4;
            }

            .slider-container {
                position: relative;
                z-index: 0;
            }

            .swiper-navigation {
                position: absolute;
                top: 50%;
                width: 100%;
            }
            .swiper-button-prev-out, .swiper-button-next-out {
                cursor: pointer;
                transition: 0.3s;
                position: relative;
                z-index: 1;
                &.swiper-button-disabled {
                    opacity: 0.5;
                }
            }
        }
    }

    .block_inner {
        @include max(tablet) {
            flex-direction: column;
        }
    }

    .link {
        align-self: flex-start;
    }

    // img:hover {
    //     cursor: zoom-in;
    //     cursor: url('$lib/assets/svg/arrowfull.svg'), auto;
    // }

    .caption {
        text-align: right;
    }

</style>