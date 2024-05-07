<script lang="ts">
    import BlockCollaboration from "$lib/parts/Elements/BlockCollaboration.svelte";
    import PushContact from "$lib/parts/Modules/PushContact.svelte";

    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations, page} = data)
</script>




<div class="container">

    <div class="grid">

        <div class="m_4column">
            <h1>{page.title}</h1>
            <div>{@html page.content}</div>
        </div>

        <div class="m_8column">
            {#each collaborations.nodes as post }
                <BlockCollaboration {post} type="collaborations"/>
            {/each}
        </div>

    </div>


    <PushContact />

    
</div>


