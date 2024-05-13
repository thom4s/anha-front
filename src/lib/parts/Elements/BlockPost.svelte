<script>
    export let post = {};
    export let type = '';
    import { register } from 'swiper/element/bundle';
    register();

    $: console.log('block_post', post)
</script>


<article class="block_post">

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
                    {@html post.informationsNews?.video}

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
                            <img src="{img.sourceUrl}" alt="">
                        </swiper-slide>
                        {/each}
                    </swiper-container >

                {:else}
                    <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
                {/if}
            </div>
        </div>

    </div>

</article>


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
</style>