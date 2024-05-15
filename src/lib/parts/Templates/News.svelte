<script lang="ts">
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import { getAllPosts } from "$lib/queries/posts";
    export let page = {};
    export let posts = [];

    $: console.log('News posts: ', posts)

    let firstPaginationStep = true;
    let lastPaginationStep = false;

    const getPrevPosts = async () => {
        const firstPost = posts.edges[0];
        const firstPostCursor = firstPost.cursor;
        const prevPosts = await getAllPosts('fr', 'last', 'before', firstPostCursor)
        console.log('prevPosts:', prevPosts);
        if(prevPosts ) {
            firstPaginationStep = true
            return prevPosts;
        }
        else {
            firstPaginationStep = false
        }
    }
    const getNextPosts = async () => {
        const lastPost = posts.edges.at(-1);
        const lastPostCursor = lastPost.cursor;
        const nextPosts = await getAllPosts('fr', 'first', 'after', lastPostCursor)
        console.log('nextPosts:', nextPosts);
        if(nextPosts ) {
            firstPaginationStep = false
            return nextPosts;
        }
        else {
            firstPaginationStep = false
            lastPaginationStep = true
        }
    }

</script>


<article>

    <div class="grid">

        <div class="m_4column">
            <h1>{page.title}</h1>
            <div>{@html page.content}</div>
        </div>

        <div class="m_8column">
            {#each posts.edges as post }
                <BlockPost post={post.node} type="posts"/>
            {/each}

            <div class="pagination">
                <button 
                    class="prev" 
                    disabled={firstPaginationStep}
                    on:click={ async () => {
                        posts = await getPrevPosts();
                    }}
                >Prev</button>
                
                <button 
                    class="prev"
                    disabled={lastPaginationStep}
                    on:click={ async () => {
                        posts = await getNextPosts();

                    }}
                >Next</button>
            </div>
        </div>

    </div>

</article>




<PushContact />


<style lang="scss">
    article {
        padding-top: 200px;
    }
</style>