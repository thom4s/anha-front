<script lang="ts">
    import BlockProjet from "$lib/parts/Elements/BlockProjet.svelte";
	import PushContact from "$lib/parts/Modules/PushContact.svelte";

    import { onMount } from "svelte";
	import { fade } from 'svelte/transition';

    export let page = {};
    export let projets = [];
    export let savoirfaires = [];
    export let secteurs = [];

    let filters = [];

    const filter = (e) => {
        loading = true;
        filters = [e.target.getAttribute('data-term')];
        setTimeout( () => {
            resizeAllGridItems()
            loading = false;
        }, 1000)
    }
    const reset = (e) => {
        filters = [];
        resizeAllGridItems()
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name) || filters.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
		}) : projets.nodes;

        $: console.log('filters', filters)

        let allItems, grid, loading = false;


        // MASONRY 

        function resizeGridItem(item){

            let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            let rowSpan = Math.ceil((item.querySelector('.item_container').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span " + rowSpan;
        }

        function resizeAllGridItems(){
            allItems = document.querySelectorAll(".grid-item");
            for(let x=0 ; x < allItems.length ; x++ ){
                resizeGridItem(allItems[x]);
            }
        }

        onMount ( () => {
            console.log('onMount !')
            grid = document.querySelector(".masonry");

            resizeAllGridItems();
            window.addEventListener("resize", resizeAllGridItems);
        }) 




</script>


    <h1 class="visualy-hidden">{page.title}</h1>
    <!-- <div>{@html page.content}</div> -->

    
    <div class="grid container">

        <div class="s_12column">
            <div class="filters sticky">

                <div class="filterGroup mb-medium">
                    <button on:click={ reset } data-term="" class="caption filterItem" class:active={filters.length === 0}>Tous les secteurs</button>
                    {#each secteurs.nodes as t }
                        <button on:click={ (e) => filter(e) } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</button>
                    {/each}
                </div>

                <div class="filterGroup">
                    <button on:click={ reset } data-term="" class="caption filterItem" class:active={filters.length === 0}>Tous les savoir-faire</button>
                    {#each savoirfaires.nodes as t }
                        <button on:click={ (e) => filter(e) } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</button>
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
        margin-top: $space-xxl;
    }

    .masonry {
        grid-auto-rows: 20px;
        grid-row-gap: 0;
        transition: opacity .3s;
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

        span {
            cursor: pointer;
        }

    }
</style>