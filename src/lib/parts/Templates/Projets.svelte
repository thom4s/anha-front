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
        filters = [e.target.getAttribute('data-term')]
    }

    $: visibleProjets = filters.length > 0 ?
        projets.nodes.filter( project => {
			return filters.includes(project.informationsProjet.tax_savoirfaire?.nodes[0].name) || filters.includes(project.informationsProjet.tax_secteur?.nodes[0].name)
		}) : projets.nodes;

        $: console.log('filters', filters)

        let allItems, grid;


        // MASONRY 

        function resizeGridItem(item){

            let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            let rowSpan = Math.ceil((item.querySelector('.item_container').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span " + rowSpan;
        }

        function resizeAllGridItems(){
            for(let x=0 ; x < allItems.length ; x++ ){
                resizeGridItem(allItems[x]);
            }
        }

        onMount ( () => {
            console.log('onMount !')
            $: grid = document.querySelector(".masonry");
            $: allItems = document.querySelectorAll(".grid-item");

            resizeAllGridItems();
            window.addEventListener("resize", resizeAllGridItems);

        }) 




</script>


    <h1 class="visualy-hidden">{page.title}</h1>
    <!-- <div>{@html page.content}</div> -->

    
    <div class="grid container">

        <div class="s_3column">
            <div class="filters sticky">

                <div class="filterGroup mb-medium">
                    <span class="caption filterGroupName">Filtrer par Secteurs</span>
                    {#each secteurs.nodes as t }
                        <button on:click={ (e) => filter(e) } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</button>
                    {/each}
                </div>

                <div class="filterGroup">
                    <span class="caption filterGroupName">Filtrer par Savoir-faire</span>
                    {#each savoirfaires.nodes as t }
                        <button on:click={ (e) => filter(e) } data-term="{t.name}" class="caption filterItem" class:active={filters.includes(t.name)}>{t.name}</button>
                    {/each}
                </div>

            </div>
        </div>

        <div class="s_9column ">
            <div class="masonry grid">
                {#each visibleProjets as projet }
                    <div class="grid-item m_3column">
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
    }

    .item_container {
        position: relative;
        padding-bottom: $space-l;

        &:not(:nth-child(3n))::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: - $space-s;
            height: 100%;
            width: 1px;
            background-color: black;
        }
    }
    
    .sticky {
        position: sticky;
        top: $space-xxl * 2;
    }

    // PROJECT FILTERS

    .filterGroupName {
        &:after {
            content: '>'
        }
    }
    .filterItem {
        background: none;
        border: none;
        text-align: left;
        padding: 0;
        
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