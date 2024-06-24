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
                <div class="item_container m_4column">
                    <BlockPress post={post.node} type="posts"/>
                </div>
            {/each}

    </div>

    <LoadMore bind:posts={posts} pageInfo={posts.pageInfo} contentType="presse"/>

</article>



<PushContact smallContact={false}/>


<style lang="scss">

    .grid {
        grid-row-gap: 0;
    }
    .item_container {
        position: relative;
        padding-bottom: $space-xl;
    }
    article {
        padding-top: $space-xl;
    }
</style>