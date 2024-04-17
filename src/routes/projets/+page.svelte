<script lang="ts">

    export let data: {
        projets: Promise<void>;
    }
    $: ({projets} = data)
    $: console.log(projets)

</script>


{#each projets.nodes as projet }
    <h1>{projet.title}</h1>
    <div>{@html projet.content}</div>
{/each}