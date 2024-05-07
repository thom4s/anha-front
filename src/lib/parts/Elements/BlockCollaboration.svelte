<script>
    export let post = {};
    export let type = '';
</script>


<article class="block_collaboration">

    <div class="grid">

        <div class="m_4column">

            <div>{post.informationsCollaboration.date}</div>
            
            <div>  
                <h2>{post.title}</h2>
                <div>{@html post.excerpt}</div>
            </div>
            
            {#if post.informationsCollaboration.lien }
                <a href="{post.informationsCollaboration.lien}">
                    {post.informationsCollaboration.label}
                </a>
            {/if}
        </div>

        <div class="m_4column">
            <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
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
}
</style>