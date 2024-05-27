<script lang="ts">
    import { getAllPressArticles } from "$lib/queries/press";

    export let posts = []
    export let pageInfo = []

    const loadMorePosts = async () => {
        const length = posts.edges.length;
        const newPosts = await getAllPressArticles('fr', length + 1)
        console.log('loadMorePosts', posts)
        return newPosts;
    }
</script>


{#if pageInfo.hasNextPage}
    <div class="pagination">
        <button 
            class="btn dark" 
            on:click={ async () => {
                posts = await loadMorePosts();
            }}
        >Load More</button>
    </div>
{/if}

<style lang="scss">


</style>