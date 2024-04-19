
<script lang="ts">
    export let data: {
        projet: Promise<void>;
    }
    $: ({projet} = data)
    $: console.log('projet: ', projet)

</script>

<div class="container">
    {#if projet}

        <h1>{projet.title}</h1>
        <div>{@html projet.content}</div>

        {#each projet.informationsProjet.secteur.nodes as node}
            <p>{node.name}</p>
        {/each}
        
        {#each projet.informationsProjet.savoirFaire.nodes as node}
            <p>{node.name}</p>
        {/each}
        
    {:else}
        <p>No content</p>
    {/if}
</div>