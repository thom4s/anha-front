<script lang="ts">

    export let data: {
        posts: Promise<void>;
    }
    $: ({posts} = data)
    $: console.log(posts)

</script>


{#each posts.nodes as post }
    <h1>{post.title}</h1>
    <div>{@html post.excerpt}</div>
    <a href="/posts/{post.slug}">En savoir plus</a>
{/each}