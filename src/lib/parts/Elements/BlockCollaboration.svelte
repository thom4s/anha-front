<!-- @ -1,48 +0,0 @@ -->
<script>
    export let post = {};
    export let type = '';
</script>


<article class="block_collaboration">

    <div class="fl-justify gap-l">

        <div class="bloc_texts fl-column-space">

            <div class="caption">{post.informationsCollaboration.date}</div>
            
            <div class="fl-column-space gap-s">  
                <h2 class="h3 no-margin">{post.title}</h2>
                <div class="body">{@html post.excerpt}</div>
            </div>
            
            <div>
                {#if post.informationsCollaboration.lien }
                    <a class="link" href="{post.informationsCollaboration.lien}">
                        {post.informationsCollaboration.label}
                    </a>
                {/if}
            </div>
        </div>

        <div class="bloc_media">
            <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
        </div>

    </div>

</article>


<style lang="scss"> 
.block_collaboration {
    border-top: 1px solid;
    padding: 20px 0;

    &:nth-child(even) .bloc_media {
        order: -1;
    }

    .bloc_texts {
        width: 55%;
    }
    .bloc_media {
        width: 45%;
        height: 100%;

        img {
            width: 100%;
            height: auto;
            aspect-ratio: 5/4;
        }
    }
}
</style>