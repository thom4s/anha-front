<script>
    export let post = {};
</script>


<article class="block_press">

            <div class="block_media mb-xsmall">
                <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
            </div>

            <div class="block_meta fl-justify mb-xsmall">
                <span class="caption">{post.informationsPress?.date}</span>
                <span class="caption">{post.informationsPress?.author}</span>
            </div>
            
            <div class=" mb-xxsmall">  
                <h2 class="body mb-0">{post.informationsPress?.magazineName}</h2>
                <h2 class="body">{post.title}</h2>
            </div>
            
            {#if post.informationsPress?.lien }
                <a href="{post.informationsPress?.lien}" class="link">
                    {post.informationsPress?.label}
                </a>
            {/if}


</article>


<style lang="scss"> 
    img {
        width: 100%;
        aspect-ratio: 4/5;
        background-color: $beige;
    }
</style>