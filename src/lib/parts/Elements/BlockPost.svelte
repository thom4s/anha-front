<script>
    import FullScreen from '$lib/parts/Modules/FullScreen.svelte';
    import arrowfull from '$lib/assets/svg/arrowfull.svg';

    import { fade } from 'svelte/transition';
    export let post = {};
    export let type = '';
    import { register } from 'swiper/element/bundle';
	import SocialLinks from '../Navigations/SocialLinks.svelte';
    register();

    let fullscreen = false;
    let fullScreenContent = '';
    let fullScreenType = '';

    export let module = false;



    // PARALLAX
    import Ukiyo from "ukiyojs";
	import { onMount } from 'svelte';

    onMount(() => {
        new Ukiyo(".parallax", {
            scale: 1.1,
            speed: 1.2,
        })
    })


    
</script>


<article class="block_post" class:module={module} transition:fade={{ duration: 200 }}>

    <div class="fl-justify gap-l">

        <div class="half media">
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
                        class="parallax"
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

        <div class="half texts">

            <div class="bloc_texts">
                <div class="fl-justify fl-vtop">  
                    <div class="caption">{post.informationsNews?.date}</div>
                    <div class="caption">{@html post.informationsNews?.lieu}</div>
                </div>
                
                <div class="fl-column-space gap-s">  
                    <h2 class="h3 no-margin">{post.title}</h2>

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
                    <div class="fl-justify vbot">
                        <p class="caption">Retrouvez tous nos événements sur nos réseaux sociaux</p>
                        <SocialLinks />
                    </div>

                {:else}
                    <a class="link" href="{post.informationsNews?.lien}">
                        {post.informationsNews?.labelDuLien}
                    </a>
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
        padding: 30px 0;

        &:not(.module):nth-child(odd) .half.texts {
            order: -1;
        }

        &:nth-child(2n) {
            .grid {
                grid-auto-flow: dense;
                direction: rtl;
            }
        }
        .half.media {
            width: 45%;
        }
        .half.texts {
            width: 55%;
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
        }
    }
    img:hover {
        cursor: zoom-in;
        cursor: url('$lib/assets/svg/arrowfull.svg'), auto;
    }

    .caption {
        text-align: right;
    }
</style>