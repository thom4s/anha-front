<script>
    export let post = {};
</script>


<article class="block_press">

    <div class="grid">

        <div class="m_4column">

            <div>{post.informationsPress?.date}</div>
            
            <div>  
                <h2>{post.title}</h2>
                <div>{@html post.excerpt}</div>
            </div>
            
            {#if post.informationsPress?.lien }
                <a href="{post.informationsPress?.lien}">
                    {post.informationsPress?.label}
                </a>
            {/if}
        </div>

        <div class="m_4column">
            <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
        </div>

    </div>

</article>


<style lang="scss"> 
.block_press {
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