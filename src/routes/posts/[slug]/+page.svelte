<script lang="ts">

    export let data: {
        post: Promise<void>;
    }
    $: ({post} = data)
    $: console.log('post: ', post)

</script>


    <h1>{post.title}</h1>
    <div>Auteur : {@html post.author.node.name}</div>

    {#if post.featuredImage}
        <img src="{post.featuredImage.node.sourceUrl}" srcset={post.featuredImage.node.srcSet} sizes="{post.featuredImage.node.sizes}" alt="{post.featuredImage.node.altText}" />
    {/if}

    <div>{@html post.content}</div>
