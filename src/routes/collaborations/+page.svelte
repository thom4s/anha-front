<script lang="ts">
    import BlockPost from "$lib/parts/BlockPost.svelte";
    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations} = data)
    $: console.log(collaborations)

</script>


<div class="container">

    <h1>Collaborations</h1>

    {#each collaborations.nodes as post }
        <BlockPost {post} type="collaborations"/>
    {/each}

</div>

