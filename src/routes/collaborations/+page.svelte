<script lang="ts">

    export let data: {
        collaborations: Promise<void>;
    }
    $: ({collaborations} = data)
    $: console.log(collaborations)

</script>


<div class="container">

    <h1>Collaborations</h1>

    {#each collaborations.nodes as collab }
        <h2>{collab.title}</h2>
        <div>{@html collab.excerpt}</div>
    {/each}

</div>

