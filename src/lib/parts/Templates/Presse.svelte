<script lang="ts">
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import LoadMore from "$lib/parts/Navigations/LoadMore.svelte";
    import BlockPress from "$lib/parts/Elements/BlockPress.svelte";

    export let page = {};
    export let posts = [];

    $: console.log('News posts: ', posts)


</script>


<article class="container">

    <h1 class="visualy-hidden">{page.title}</h1>

    <div class="grid mb-xxlarge">

            {#each posts.edges as post }
                <div class="m_4column mb-medium">
                    <BlockPress post={post.node} type="posts"/>
                </div>
            {/each}

    </div>

    <LoadMore bind:posts={posts} pageInfo={posts.pageInfo} />

</article>



<PushContact smallContact={false}/>


<style lang="scss">
    article {
        padding-top: 200px;
    }
</style>