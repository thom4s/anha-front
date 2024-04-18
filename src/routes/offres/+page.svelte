<script lang="ts">

    export let data: {
        offres: Promise<void>;
    }
    $: ({offres} = data)
    $: console.log(offres)

</script>

<div class="container">

    <h1>Offres d'emploi</h1>

    {#each offres.nodes as offre }
        <h2>{offre.title}</h2>
        <div>{@html offre.excerpt}</div>
    {/each}

</div>