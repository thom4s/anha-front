<script lang="ts">
    import BlockProjet from "$lib/parts/Elements/BlockProjet.svelte";
	import { fade } from 'svelte/transition';
    
    export let page = {};
    export let projets = [];
    export let savoirfaires = [];
    export let secteurs = [];

    let filters = [];

    const filter = (e) => {
        filters = [e.target.getAttribute('data-term')]
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name) || filters.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
		}) : projets.nodes;

        $: console.log('filters', filters)
</script>


    <h1 class="visualy-hidden">{page.title}</h1>
    <!-- <div>{@html page.content}</div> -->

    
    <div class="grid container">

        <div class="s_3column">
            <div class="filters">

                <div class="filterGroup mb-medium">
                    <span class="caption filterGroupName">Filtrer par Secteurs</span>
                    {#each secteurs.nodes as t }
                        <span on:click={ (e) => filter(e) } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</span>
                    {/each}
                </div>

                <div class="filterGroup">
                    <span class="caption filterGroupName">Filtrer par Savoir-faire</span>
                    {#each savoirfaires.nodes as t }
                        <span on:click={ (e) => filter(e) } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</span>
                    {/each}
                </div>

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

    .container {
        margin-top: $space-xxl;
    }


    // PROJECT FILTERS

    .filterGroupName {
        &:after {
            content: '>'
        }
    }
    .filterItem {

        &:before {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid;
            margin-right: 10px;
            transition: background-color .3s;
        }

        &.active:before {
            background-color: black;
        }
    }

    .filterGroup {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
            cursor: pointer;
        }

    }
</style>