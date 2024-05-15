<script lang="ts">
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import Pagination from "$lib/parts/Navigations/Pagination.svelte";
    import BlockPress from "$lib/parts/Elements/BlockPress.svelte";

    export let page = {};
    export let posts = [];

    $: console.log('News posts: ', posts)


</script>


<article>

    <div class="grid">

        <div class="m_4column">
            <h1>{page.title}</h1>
            <div>{@html page.content}</div>
        </div>

        <div class="m_8column">
            {#each posts.edges as post }
                <BlockPress post={post.node} type="posts"/>
            {/each}

            <Pagination bind:posts={posts} pageInfo={posts.pageInfo} />
        </div>

    </div>

</article>



<PushContact smallContact={false}/>


<style lang="scss">
    article {
        padding-top: 200px;
    }
</style>