<script lang="ts">
    import Arrow from '$lib/parts/Svgs/Arrow.svelte';
    import NotFound from '$lib/parts/Navigations/NotFound.svelte';
    
    import arrowfull from '$lib/assets/svg/arrowfull.svg';
    import FullScreen from '$lib/parts/Modules/FullScreen.svelte';
    let fullscreen = false;
    let fullScreenContent = '';
    let fullScreenType = '';


    import { afterNavigate } from '$app/navigation';
    import { base } from '$app/paths'

    let previousPage : string = base ;

    afterNavigate(({from}) => {
        previousPage = from?.url.pathname || previousPage
    }) 

    export let data: {
        projet: Promise<void>;
    }
    $: ({projet, prevPage, nextPage} = data)

    $: console.log( projet.informationsProjet.visuels )

    let allMedias = {nodes: []};
    $: {
        allMedias.nodes = [...allMedias.nodes, projet.featuredImage?.node]

        for( const v of projet.informationsProjet.visuels) {
            for( const n of v.visuel.nodes) {
                allMedias.nodes = [...allMedias.nodes, n]
            }
        }
        console.log('allMedias', allMedias)
    }

</script>


<article class="template mb-xxlarge" data-template="projet">

    <div class="">
        {#if projet}

            <article class="grid" data-id="{projet.id}" data-dbid={projet.databaseId}>

                <div class="s_12column m_6column project_texts">

                    <div class="texts_inner">

                        <div class="sticky">

                            <div class="project_action">
                                <a href="/fr/projets" class="link">Retour à la liste des projets</a>
                            </div>

                            <div class="project_title">
                                <h1 class="h2">{projet.title}</h1>
                            </div>

                            <div class="m_hide projet_media_item" data-design="full" data-ratio="verticale">
                                <img 
                                    src="{projet.featuredImage.node.sourceUrl}" 
                                    srcset={projet.featuredImage.node.srcSet} 
                                    sizes="{projet.featuredImage.node.sizes}" 
                                    alt="{projet.featuredImage.node.altText}"
                                    on:click={ () => {
                                        fullscreen = true;
                                        fullScreenContent = allMedias;
                                        fullScreenType= 'slide';
                                    }}
                                />
                            </div>

                            <div class="project_metadata">

                                <p>
                                    <span>Date</span>
                                    <span class="caption">{@html projet.informationsProjet.meta_date}</span>
                                </p>

                                {#if projet.informationsProjet.tax_secteur}
                                    {#each projet.informationsProjet.tax_secteur.nodes as node}
                                        <p>
                                            <span>Secteur</span>
                                            <span class="caption">{node.name}</span>
                                        </p>
                                    {/each}
                                {/if}
                                
                                {#if projet.informationsProjet.tax_savoirfaire}
                                    {#each projet.informationsProjet.tax_savoirfaire.nodes as node}
                                        <p>
                                            <span>Savoir Faire</span>
                                            <span class="caption">{node.name}</span>
                                        </p>
                                    {/each}
                                {/if}

                                {#if projet.informationsProjet.tax_materiau}
                                    {#each projet.informationsProjet.tax_materiau.nodes as node}
                                        <p>
                                            <span>Materiaux</span>
                                            <span class="caption">{node.name}</span>
                                        </p>
                                    {/each}
                                {/if}
                            </div>

                            <div class="project_content">
                                {@html projet.content}
                            </div>

                            <div class="s_hide m_show project_navigation fl-justify">
                                {#if prevPage }
                                    <a href="{prevPage.node.uri}" class="link fl-vcenter gap-xs"><Arrow left={true} /> {prevPage.node.title}</a>
                                {/if}
                                {#if nextPage }
                                    <a href="{nextPage.node.uri}" class="link fl-vcenter gap-xs">{nextPage.node.title} <Arrow /> </a>
                                {/if}
                            </div>
                        </div>

                    </div>
                </div>


                <div class="s_12column m_6column project_medias">

                        <div class="s_hide m_show projet_media_item" data-design="full" data-ratio="verticale">
                            <img 
                                src="{projet.featuredImage.node.sourceUrl}" 
                                srcset={projet.featuredImage.node.srcSet} 
                                sizes="{projet.featuredImage.node.sizes}" 
                                alt="{projet.featuredImage.node.altText}"

                                on:click={ () => {
                                    fullscreen = true;
                                    fullScreenContent = allMedias;
                                    fullScreenType= 'slide';
                                }}
                            >
                        </div>



                        {#if projet.informationsProjet.visuels}
                            {#each projet.informationsProjet.visuels as v}
                                
                                <div class="projet_media_item" data-design="{v.design}" data-ratio="{v.ratio}">

                                    {#each v.visuel.nodes as node}
                                        <img 
                                            src="{node.sourceUrl}" 
                                            srcset={node.srcSet} 
                                            sizes="{node.sizes}" 
                                            alt="{node.altText}"

                                            on:click={ () => {
                                                fullscreen = true;
                                                fullScreenContent = allMedias;
                                                fullScreenType= 'slide';
                                            }}
                                        >
                                    {/each}
                                </div>
                            {/each}
                        {/if}

                </div>

            </article>

            <div class="container m_hide project_navigation fl-justify">
                {#if prevPage }
                    <a href="{prevPage.node.uri}" class="link fl-vcenter gap-xs"><Arrow left={true} /> {prevPage.node.title}</a>
                {/if}
                {#if nextPage }
                    <a href="{nextPage.node.uri}" class="link fl-vcenter gap-xs">{nextPage.node.title} <Arrow /> </a>
                {/if}
            </div>

        {:else}
            <NotFound />

        {/if}
        
    </div>

</article>


{#if fullscreen }
    <FullScreen bind:fullscreen={fullscreen} type={fullScreenType} content={fullScreenContent} />
{/if}

<style lang="scss">

    .project_texts {

        padding-top: $space-xl;
        position: relative;
        display: flex;
        justify-content: flex-end;

        @include min(tablet) {
            padding-right: $space-xl;
            padding-left: $space-xl;
        }        
        @include max(tablet) {
            padding-right: 0;
            padding-left: 0;
        }

    }
    .texts_inner {
        width: 100%;
        padding-left: calc( 100% - $max-width ) / 2;
    }
    .project_medias {
        margin-left: - $space-s;
    }
    .sticky {
        top: 100px;
    }

    .project_action {
        @include min(tablet) {
            margin-bottom: $space-xxl;

        }
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
            margin-bottom: $space-l;
        }
    }
    .project_title {
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
        }
    }

    .project_metadata {
        margin-bottom: $space-xxl;
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
        }
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
        @include max(tablet) {
            padding-right: $space-m;
            padding-left: $space-m;
        }
    }

    .projet_media_item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: $space-xl;
        &.s_hide {
            @include max(tablet) {
                display: none;
            } 
        }
        &.m_hide {
            @include min(tablet) {
                display: none;
            } 
        }
    }

    [data-design="couple"] {
        gap: $space-l;

        @include min(tablet) {
            height: 75vh;
        }        
        @include max(tablet) {
            height: 60vh;
        }
        img:first-child {
            align-self: flex-start;
        }
        img:last-child {
            align-self: flex-end;
        }
    }
    [data-design="left"] {
        padding-right: $space-xl;    
    }
    [data-design="right"] {
        padding-left: $space-xl;    
    }

    img:hover {
        cursor: zoom-in;
        cursor: url('$lib/assets/svg/arrowfull.svg'), auto;
    }

</style>