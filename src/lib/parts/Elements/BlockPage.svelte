<script>
    export let post = {};

</script>


<article class="block_page">

    <div class="fl-vcenter gap-m">

        <div class="half">

            <div class="bloc_media">
                <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
            </div>

            
        </div>

        <div class="half">
            <div class="bloc_texts">
                
                <div class="fl-column-start gap-m">  
                    <h2 class="h2 no-margin">{post.title}</h2>
                    <div class="body">{@html post.content}</div>
                    <a class="link" href="{post.link}">En savoir plus</a>
                </div>
                
            </div>
        </div>

    </div>

</article>


<style lang="scss"> 
.half {
    width: 50%;
}

img {
    aspect-ratio: 5/4;
}
</style>