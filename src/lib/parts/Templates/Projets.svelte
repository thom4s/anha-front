<script lang="ts">
    import BlockProjet from "$lib/parts/Elements/BlockProjet.svelte";
	import { fade } from 'svelte/transition';
    
    export let page = {};
    export let projets = [];
    export let savoirfaires = [];
    export let secteurs = [];

    let filters = [];

    const filter = (e) => {
        filters = [e.target.innerText]
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name) || filters.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
		}) : projets.nodes;

        $: console.log('filters', filters)
</script>


    <div>
        <h1>{page.title}</h1>
        <div>{@html page.content}</div>
    </div>

    
    <div class="grid">

        <div class="s_3column">
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

        <div class="s_9column ">
            <div class="grid">
                {#each visibleProjets as projet }
                    <div class="m_3column">
                        <BlockProjet {projet}/>
                    </div>
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