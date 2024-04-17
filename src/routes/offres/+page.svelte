<script lang="ts">

    export let data: {
        offres: Promise<void>;
    }
    $: ({offres} = data)
    $: console.log(offres)

</script>


{#each offres.nodes as offre }
    <h1>{offre.title}</h1>
    <div>{@html offre.content}</div>
{/each}