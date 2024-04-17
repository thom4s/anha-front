<script lang="ts">

    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations} = data)
    $: console.log(collaborations)

</script>


{#each collaborations.nodes as collab }
    <h1>{collab.title}</h1>
    <div>{@html collab.content}</div>
{/each}