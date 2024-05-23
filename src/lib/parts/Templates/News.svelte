<script lang="ts">
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import Pagination from "../Navigations/Pagination.svelte";
    import SocialLinks from "$lib/parts/Navigations/SocialLinks.svelte"

    export let page = {};
    export let posts = [];

    $: console.log('News posts: ', posts)


</script>


<article>

    <div class="grid">

        <div class="m_4column">
            <h1>{page.title}</h1>

            <div class="fl-justify vbot">

                <p class="caption">Retrouvez tous nos événements sur nos réseaux sociaux</p>

                <SocialLinks />
            </div>

        </div>

        <div class="m_8column">
            {#each posts.edges as post }
                <BlockPost post={post.node} type="posts"/>
            {/each}

            <Pagination bind:posts={posts} pageInfo={posts.pageInfo} />
        </div>

    </div>

</article>




<PushContact />


<style lang="scss">
    article {
        padding-top: 200px;
    }
</style>