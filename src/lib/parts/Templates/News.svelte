<script lang="ts">
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import SocialLinks from "$lib/parts/Navigations/SocialLinks.svelte"
	import LoadMore from "$lib/parts/Navigations/LoadMore.svelte";

    export let page = {};
    export let posts = [];

    $: console.log('News posts: ', posts)


</script>


<article>

    <div class="container">
        <div class="grid">
    
            <div class="m_3column">
                <!-- <h1>{page.title}</h1> -->
    
                <div class="fl-column-space gap-xs">
    
                    <p class="caption">Retrouvez tous nos événements sur nos réseaux sociaux</p>
    
                    <SocialLinks />
                </div>
    
            </div>
    
            <div class="m_9column">
                {#each posts.edges as post }
                    <BlockPost post={post.node} type="posts"/>
                {/each}
    
                <LoadMore bind:posts={posts} pageInfo={posts.pageInfo} contentType="news"/>

            </div>
    
        </div>
    </div>

</article>




<PushContact />


<style lang="scss">
    article {
        padding-top: $space-xxl;
    }
</style>