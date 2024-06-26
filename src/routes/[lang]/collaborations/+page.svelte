<script lang="ts">
    import BlockCollaboration from "$lib/parts/Blocks/BlockCollaboration.svelte";

    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations, page} = data)
</script>




<div class="container">

    <div class="grid">

        <div class="m_3column">
            <!-- <h1>{page.title}</h1> -->
            <div>{@html page.content}</div>
        </div>

        <div class="m_9column">
            {#each collaborations.nodes as post }
                <BlockCollaboration {post} type="collaborations"/>
            {/each}
        </div>

    </div>
    
</div>


<style lang="scss">
    .container {
        padding: 60px 0;
    }
</style>