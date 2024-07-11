<script lang="ts">
    import BlockProjet from "$lib/parts/Blocks/BlockProjet.svelte";
	import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import IconFilters from '$lib/parts/Svgs/IconFilters.svelte';

    import { onMount, afterUpdate, beforeUpdate } from "svelte";
	import { fade, fly } from 'svelte/transition';
    import { Masonry } from "svelte-bricks";

    let [minColWidth, maxColWidth, gap] = [300, 500, 30]
    let width, height

    export let page = {};
    export let projets = [];
    export let savoirfaires = [];
    export let secteurs = [];

    let allItems, grid, loading = true;

    
    // MENU MOBILE
    let menuIsVisible = false;


    // FILTERS
    let filters = [];

    const filter = (e) => {
        loading = true;

        setTimeout( () => {
            filters = [e.target.getAttribute('data-term')];
        }, 500)

        setTimeout( () => {
            loading = false;
        }, 1000)

        menuIsVisible = false;
    }
    const reset = (e) => {
        loading = true;

        setTimeout( () => {
            filters = [];
        }, 500)

        setTimeout( () => {
            loading = false;
        }, 1000)

        menuIsVisible = false
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name) || filters.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
		}) : projets.nodes;

    $: console.log('filters', filters)



    // MASONRY 


    beforeUpdate ( () => {
        //loading = true;
    })

    afterUpdate ( () => {
        setTimeout( () => {
            loading = false;
        }, 1000)
    }) 



</script>


    <h1 class="visualy-hidden">{page.title}</h1>
    <!-- <div>{@html page.content}</div> -->

    <div class="grid container filtersContainer">

        <div class="btn_outer s_12column">
            <button class="btn_clean fl-vcenter gap-s" on:click={ () => menuIsVisible = true }>
                <span class="icon"><IconFilters /></span>
                <span class="caption">Afficher les filtres</span>
            </button>
        </div>

        <div class="menusContainer s_12column" class:menuIsVisible>

            <div class="btn_outer">
                <button class="btn_clean fl-vcenter gap-s" on:click={ () => menuIsVisible = false }>
                    <span class="icon"><IconFilters /></span>
                    <span class="caption">Masquer les filtres</span>
                </button>
            </div>

            <div class="filters sticky">

                <div class="filterGroup mb-small">
                    <button on:click={ reset } data-term="" class="caption filterItem" class:active={filters.length === 0}>Tous les secteurs</button>
                    {#each secteurs.nodes as t }
                        <button on:click={ (e) => { loading = true; filter(e) } } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</button>
                    {/each}
                </div>

                <div class="filterGroup">
                    <button on:click={ reset } data-term="" class="caption filterItem" class:active={filters.length === 0}>Tous les savoir-faire</button>
                    {#each savoirfaires.nodes as t }
                        <button on:click={ (e) => { loading = true; filter(e) } } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</button>
                    {/each}
                </div>

            </div>
        </div>

    </div>

    <div class="grid container">

        <div class="s_12column ">
            <div class:loading={loading}>
                <Masonry
                    items={visibleProjets}
                    {minColWidth}
                    {maxColWidth}
                    {gap}
                    let:item={projet}
                    bind:masonryWidth={width}
                    bind:masonryHeight={height}
                    >
                        <BlockProjet {projet}/>
                </Masonry>
            </div>
        </div>
    </div>

    <PushContact />




<style lang="scss">

    :global(div.masonry) {
    justify-content: flex-start;
    }
    :global(div.masonry div.col) {
        row-gap: $space-xl !important;
    }

    .container {
        @include min(tablet) {
            margin-top: $space-xxl;
        }
        @include max(tablet) {
            margin-top: $space-m;
        }
    }

    .masonry {
        grid-auto-rows: 20px;
        grid-row-gap: 0;
        transition: opacity .1s ease-in-out;
        opacity: 1;

        &.loading {
            opacity: 0.2;
        }
    }

    .item_container {
        position: relative;
        padding-bottom: $space-l;
    }
    
    .sticky {
        position: sticky;
        top: $space-xxl * 2;
    }

    // PROJECT FILTERS

    .filtersContainer {
        @include max(bigtablet) {
            border-bottom: 1px solid black;
            column-gap: 0;
        }
    }
    .menusContainer {

        @include max(bigtablet) {
            right: auto;
            left: 0;
            transform: translateX(-110vw);
            padding: $space-m;

            &.menuIsVisible {
                transform: translateX(0);
            }
        }
    }
    .filterItem {
        background: none;
        border: 1px solid $black;
        padding: .5em 1em;
        border-radius: 16px;
        cursor: pointer;
        transition: background-color .3s;

        &:hover {
            background-color: $black;
            color: white;
        }
        &.active {
            background-color: black;
            color: white;
        }
    }

    .filterGroup {
        display: flex;
        justify-content: center;
        gap: 15px;

        @include max(tablet) {
            flex-direction: column;
            align-items: flex-start;
        }

        span {
            cursor: pointer;
        }
    }

    .btn_outer {
        @include max(bigtablet) {
            width: 100%;
            margin-bottom: $space-m;
            & > * {
                flex: 0 0 auto;
            }
        }
        @include min(bigtablet) {
            display: none;
        }

    }
    .icon {
        flex: 0 0 32px;
        width: 32px;
        height: 32px;
    }
</style>