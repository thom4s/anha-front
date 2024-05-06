<script lang="ts">
    import { register } from 'swiper/element/bundle';

    register();

    export let data: {
        page: Promise<void>;
    }
    $: ({page, prevPage, nextPage} = data)

$: console.log(prevPage, nextPage)
</script>



<div class="container">
    {#if page}

        <article class="grid" data-id="{page.id}" data-dbid={page.databaseId}>

            <div class="m_6column">

                <div class="project_title">
                    <h1>{page.title}</h1>
                </div>

                <div class="project_metadata">

                    <p>
                        <span>Date</span>
                        <span>{@html page.informationsProjet.meta_date}</span>
                    </p>

                    {#if page.informationsProjet.tax_secteur}
                        {#each page.informationsProjet.tax_secteur.nodes as node}
                            <p>
                                <span>Secteur</span>
                                <span>{node.name}</span>
                            </p>
                        {/each}
                    {/if}
                    
                    {#if page.informationsProjet.tax_savoirfaire}
                        {#each page.informationsProjet.tax_savoirfaire.nodes as node}
                            <p>
                                <span>Savoir Faire</span>
                                <span>{node.name}</span>
                            </p>
                        {/each}
                    {/if}

                    {#if page.informationsProjet.tax_materiau}
                        {#each page.informationsProjet.tax_materiau.nodes as node}
                            <p>
                                <span>Materiaux</span>
                                <span>{node.name}</span>
                            </p>
                        {/each}
                    {/if}
                </div>

                <div>
                    {@html page.content}
                </div>

                <div class="fl-justify">
                    {#if prevPage }
                        <a href="{prevPage.node.uri}">Prev Project - {prevPage.node.title}</a>
                    {/if}
                    {#if nextPage }
                        <a href="{nextPage.node.uri}">Next Project - {nextPage.node.title}</a>
                    {/if}
                </div>
                
            </div>


            <div class="m_6column">

                <swiper-container 
                    space-between="0" 
                    slides-per-view="auto" 
                    speed="500" 
                    direction="vertical"
                    sticky="true"
                    mousewheel="true"
                >

                    {#if page.informationsProjet.gallery}
                        {#each page.informationsProjet.gallery.nodes as node}
                            <swiper-slide class="swiper-slide">
                                <img src="{node.sourceUrl}">
                            </swiper-slide>
                        {/each}
                    {/if}
                </swiper-container>

            </div>

        </article>

    {:else}
        <p>No content</p>
    {/if}

    
</div>




<style lang="scss">
    .project_metadata {
        p {
            border-top: 1px solid;
            padding: 10px 0;
            margin: 0;
            display: flex;
            justify-content: space-between;
        }
    }
    swiper-container {
        height: 80vh;
    }
    .swiper-slide {
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: gray;
        padding: 20px;
    }
</style>