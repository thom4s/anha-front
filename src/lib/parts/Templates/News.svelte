<script lang="ts">
    import BlockPost from "$lib/parts/Elements/BlockPost.svelte";
    import Flexibles from "$lib/parts/Flexibles.svelte";
    import PushContact from "../Modules/PushContact.svelte";
    export let page = {};
    export let posts = [];

</script>


<article>

    <div class="grid">

        <div class="m_4column">
            <h1>{page.title}</h1>
            <div>{@html page.content}</div>
        </div>

        <div class="m_8column">
            {#each posts.nodes as post }
                <BlockPost {post} type="posts"/>
            {/each}
        </div>

    </div>

</article>

{#if page.contenusFlexibles.contenusFlexibles }
    <Flexibles smallContact contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
{/if}


<PushContact />


<style lang="scss">

</style>