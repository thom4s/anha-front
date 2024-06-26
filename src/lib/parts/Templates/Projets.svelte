<script lang="ts">
    import BlockProjet from "$lib/parts/Blocks/BlockProjet.svelte";
	import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import IconFilters from '$lib/parts/Svgs/IconFilters.svelte';

    import { onMount } from "svelte";
	import { fade } from 'svelte/transition';

    export let page = {};
    export let projets = [];
    export let savoirfaires = [];
    export let secteurs = [];

    
    // MENU MOBILE

    let menuIsVisible = false;

    const handleMobileMenu = () => {
        console.log('handleMobileMenu')
        menuIsVisible = !menuIsVisible;
    }

    // FILTERS

    let filters = [];

    const filter = (e) => {

        setTimeout( () => {
            filters = [e.target.getAttribute('data-term')];
        }, 500)

        setTimeout( () => {
            resizeAllGridItems()
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
            resizeAllGridItems()
            loading = false;
        }, 1000)

        menuIsVisible = false
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name) || filters.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
		}) : projets.nodes;

    $: console.log('filters', filters)

    let allItems, grid, loading = true;


    // MASONRY 

    function resizeGridItem(item){
        console.log('resizeGridItem : ', item);
        let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        let rowSpan = Math.ceil((item.querySelector('.item_container').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = "span " + rowSpan;
    }

    function resizeAllGridItems(){
        allItems = document.querySelectorAll(".grid-item");
        console.log('resizeAllGridItems ', allItems);
        console.log('Item length ', allItems.length);

        for(let x=0 ; x < allItems.length ; x++ ){
            resizeGridItem(allItems[x]);
        }
    }

    onMount ( () => {
        console.log('onMount !')
        grid = document.querySelector(".masonry");

        setTimeout( () => {
            resizeAllGridItems()
            loading = false;
        }, 500)

        window.addEventListener("resize", resizeAllGridItems);
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

                <div class="filterGroup mb-medium">
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
            <div class="masonry grid" class:loading={loading}>
                {#each visibleProjets as projet }
                    <div class="grid-item s_12column m_4column">
                        <div class="item_container">
                            <BlockProjet {projet}/>
                        </div>
                    </div>
                {:else}
                    <p in:fade={{ delay: 200, duration: 200 }}>Aucun résultat</p>
                {/each}
            </div>
        </div>
    </div>

    <PushContact />




<style lang="scss">

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
            opacity: 0;
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
        @include max(tablet) {
            border-bottom: 1px solid black;
        }
    }
    .menusContainer {

        @include max(tablet) {
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
        gap: 10px;

        @include max(tablet) {
            flex-direction: column;
            align-items: flex-start;
        }

        span {
            cursor: pointer;
        }
    }

    .btn_outer {
        @include max(tablet) {
            width: 100%;
            margin-bottom: $space-m;
            & > * {
                flex: 0 0 auto;
            }
        }
        @include min(tablet) {
            display: none;
        }

    }
    .icon {
        flex: 0 0 32px;
        width: 32px;
        height: 32px;
    }
</style>