<script>
    export let post = {};
    export let type = '';
</script>


<article class="block_collaboration">

    <div class="grid">

        <div class="m_4column">

            <div class="bloc_texts">
                <div>{post.informationsNews?.date}</div>
                
                <div>  
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

        <div class="m_4column">
            <div class="bloc_media">
                <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
            </div>
        </div>

    </div>

</article>


<style lang="scss"> 
.block_collaboration {
    border-top: 1px solid;
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
</style>