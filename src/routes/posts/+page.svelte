<script lang="ts">

    export let data: {
        posts: Promise<void>;
    }
    $: ({posts} = data)
    $: console.log(posts)

</script>


<div class="container">

    <h1>Les News</h1>

    {#each posts.nodes as post }
        <h1>{post.title}</h1>
        <div>{@html post.excerpt}</div>
        <a href="/posts/{post.slug}">En savoir plus</a>
    {/each}

</div>

