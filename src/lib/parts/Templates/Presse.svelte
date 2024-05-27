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
        padding-bottom: $space-l;

        &:nth-last-child(-n+3) {
            padding-bottom: 0;
        }

        &:not(:nth-child(3n))::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: - $space-s;
            height: 100%;
            width: 1px;
            background-color: black;
        }
    }
    article {
        padding-top: $space-xl;
    }
</style>