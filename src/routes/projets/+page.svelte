<script lang="ts">
    import BlockProjet from "$lib/parts/BlockProjet.svelte";

    export let data: {
        projets: Promise<void>;
    }
    $: ({projets, savoirfaires, secteurs} = data)
    

    $: {
        console.log('projets: ', projets)
        console.log('visibleProjets: ', visibleProjets)
        console.log('filters: ', filters)
    }

    let filters = [];

    const filter = (e) => {
        console.log('get that filter')
        filters = [e.target.innerText]
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.savoirFaire.nodes[0].name) || filters.includes(project.informationsProjet.secteur.nodes[0].name)
		}) : projets.nodes;

</script>

<div class="container">

    <h1>Les projets</h1>

    <div class="filters">

        <p class="filter">
            {#each secteurs.nodes as t }
                <span on:click={ (e) => filter(e) }>{t.name}</span>
            {/each}
        </p>

        <p class="filter">
            {#each savoirfaires.nodes as t }
                <span on:click={ (e) => filter(e) }>{t.name}</span>
            {/each}
        </p>

        <p class="filter">
            {#each filters as f }
                <span>{f}</span>
            {/each}
        </p>

    </div>

    {#each visibleProjets as projet }
        <BlockProjet {projet}/>
    {/each}

</div>

<style lang="scss">
    .filter {
        display: flex;
        gap: 10px;

        span {
            cursor: pointer;
        }
    }
</style>