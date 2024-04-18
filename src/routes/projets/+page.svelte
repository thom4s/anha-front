<script lang="ts">

    export let data: {
        projets: Promise<void>;
    }
    $: ({projets} = data)
    $: console.log(projets)

</script>

<div class="container">

    <h1>Les projets</h1>

    {#each projets.nodes as projet }
        <h2>{projet.title}</h2>
        <div>{@html projet.excerpt}</div>
    {/each}

</div>