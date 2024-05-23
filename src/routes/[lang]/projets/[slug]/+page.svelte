<script lang="ts">
    import Arrow from '$lib/parts/Svgs/Arrow.svelte';
    import { goto, afterNavigate } from '$app/navigation';
    import { base } from '$app/paths'

    let previousPage : string = base ;

    afterNavigate(({from}) => {
        previousPage = from?.url.pathname || previousPage
    }) 

    export let data: {
        page: Promise<void>;
    }
    $: ({page, prevPage, nextPage} = data)
</script>


<div class="mb-xxlarge ">

    <div class="container ">
        {#if page}

            <article class="grid" data-id="{page.id}" data-dbid={page.databaseId}>

                <div class="m_6column project_texts">

                    <div class="sticky">

                        <div class="project_action">
                            <a href="{previousPage}" class="link">Retour à la liste des projets</a>
                        </div>

                        <div class="project_title">
                            <h1 class="h2">{page.title}</h1>
                        </div>

                        <div class="project_metadata">

                            <p>
                                <span>Date</span>
                                <span class="caption">{@html page.informationsProjet.meta_date}</span>
                            </p>

                            {#if page.informationsProjet.tax_secteur}
                                {#each page.informationsProjet.tax_secteur.nodes as node}
                                    <p>
                                        <span>Secteur</span>
                                        <span class="caption">{node.name}</span>
                                    </p>
                                {/each}
                            {/if}
                            
                            {#if page.informationsProjet.tax_savoirfaire}
                                {#each page.informationsProjet.tax_savoirfaire.nodes as node}
                                    <p>
                                        <span>Savoir Faire</span>
                                        <span class="caption">{node.name}</span>
                                    </p>
                                {/each}
                            {/if}

                            {#if page.informationsProjet.tax_materiau}
                                {#each page.informationsProjet.tax_materiau.nodes as node}
                                    <p>
                                        <span>Materiaux</span>
                                        <span class="caption">{node.name}</span>
                                    </p>
                                {/each}
                            {/if}
                        </div>

                        <div class="project_content">
                            {@html page.content}
                        </div>

                        <div class="project_navigation fl-justify">
                            {#if prevPage }
                                <a href="{prevPage.node.uri}" class="h4 fl-vcenter gap-xs"><Arrow left={true} /> {prevPage.node.title}</a>
                            {/if}
                            {#if nextPage }
                                <a href="{nextPage.node.uri}" class="h4 fl-vcenter gap-xs">{nextPage.node.title} <Arrow /> </a>
                            {/if}
                        </div>

                    </div>
                </div>


                <div class="m_6column project_medias">

                        {#if page.informationsProjet.gallery}
                            {#each page.informationsProjet.gallery.nodes as node}
                                <div class="snap projet_media_item">
                                    <img src="{node.sourceUrl}">
                                </div>
                            {/each}
                        {/if}

                </div>

            </article>

        {:else}
            <p>No content</p>
        {/if}

        
    </div>

</div>


<style lang="scss">



    .project_texts {
        padding-right: $space-xl;
        padding-top: $space-xl;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: - $space-s;
            width: 1px;
            background-color: black;
        }
    }
    .project_medias {
        margin-left: - $space-s;
    }
    .sticky {
        position: sticky;
        top: 100px;
    }

    .project_action {
        margin-bottom: $space-xxl;
    }

    .project_metadata {
        margin-bottom: $space-xxl;
        p {
            border-top: 1px solid;
            padding: $space-s 0;
            margin: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .project_content {
        margin-bottom: $space-xxl;
    }

    .projet_media_item {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
</style>