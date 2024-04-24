<script lang="ts">
    import BlockProjet from "$lib/parts/BlockProjet.svelte";
	import { fade } from 'svelte/transition';
    
    export let data: {
        projets: Promise<void>;
    }
    $: ({page, projets, savoirfaires, secteurs} = data)

    $: {
        console.log('projets: ', projets)
        console.log('visibleProjets: ', visibleProjets)
        console.log('filters: ', filters)
    }

    let filters = [];

    const filter = (e) => {
        console.log('get that filter', e)
        filters = [e.target.innerText]
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.savoirFaire?.nodes[0].name) || filters.includes(project.informationsProjet.secteur?.nodes[0].name)
		}) : projets.nodes;

</script>

<div class="container">

    <div>
        <h1>{page.title}</h1>
        <div>{@html page.content}</div>
    </div>

    <div class="grid">

        <div class="s_4column">
            <div class="filters">

                <p class="filter">
                    <strong>Secteurs</strong>
                    {#each secteurs.nodes as t }
                        <span on:click={ (e) => filter(e) } class:active={filters.includes(t.name)}>{t.name}</span>
                    {/each}
                </p>

                <p class="filter">
                    <strong>Savoir Faires</strong>
                    {#each savoirfaires.nodes as t }
                        <span on:click={ (e) => filter(e) } class:active={filters.includes(t.name)}>{t.name}</span>
                    {/each}
                </p>

            </div>
        </div>

        <div class="s_8column">
            {#each visibleProjets as projet }
                <BlockProjet {projet}/>
            {:else}
                <p in:fade={{ delay: 200, duration: 200 }}>Aucun résultat</p>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .filter {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
            cursor: pointer;
        }
        .active {
            font-weight: bold;
            position: relative;
            left: 10px;
        }
    }
</style>