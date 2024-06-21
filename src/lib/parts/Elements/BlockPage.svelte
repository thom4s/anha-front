<script>
    export let post = {};

</script>


<article class="block_page">

    <div class="fl-vcenter gap-m grid">

        <div class="m_6column">
            <div class="bloc_media">
                <img src="{post.featuredImage?.node?.sourceUrl}" alt="">
            </div>
        </div>

        <div class="m_6column">
            <div class="bloc_texts">
                
                <div class="fl-column-space gap-m">  
                    <h2 class="h1 no-margin">{@html post.title}</h2>
                    <div class="body">{@html post.excerpt}</div>
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
.bloc_texts {
    max-width: $max-width / 2;
    padding: $gutter * 4;
}
</style>