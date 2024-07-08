<script>
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

    $: console.log(post.title, post.informationsNews)

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

                    <swiper-container 
                        space-between="0" 
                        slides-per-view="auto" 
                        init="true"
                        navigation={true}
                        loop="true"
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
                                        $fullScreenContent = post.informationsNews?.galery
                                    }}/>

                            </swiper-slide>
                        {/each}
                    </swiper-container >

                {:else}

                    <Image 
                        node={post.featuredImage?.node} 
                        parallax={true}
                        hoverTarget={true}
                        on:imageClicked={ () => {
                            $fullscreen = true;
                            $fullScreenType = 'slide';
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
                    <h3 class="h2 mb-small">{@html post.title}</h3>

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