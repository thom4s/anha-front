<script>
	import { fade } from 'svelte/transition';

    export let projet = {};
    export let type = '';    
</script>


<article class="block" transition:fade={{ duration: 200 }}>
    <a class="fl-column-space gap-xs" href="{projet.uri}">

        {#if projet.informationsProjet.tax_client }
            {#each projet.informationsProjet.tax_client.nodes as node}
                <div class="caption">{node.name}</div>
            {/each}
        {/if}

        <a href="#" class="h4">
            <h4 class="h4 no-margin">
                {projet.title}
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8.62305H13.7559" stroke="black" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M9.5 4.12305L14 8.62305L9.5 13.123" stroke="black" stroke-linecap="square"/>
                </svg>
            </h4>
        </a>

        <div class="bloc_metadata fl-justify">
            {#if projet.informationsProjet.meta_date }
                <!-- <span class="caption">{projet.informationsProjet.meta_date}</span> -->
            {/if}

            {#if projet.informationsProjet.tax_secteur }
                {#each projet.informationsProjet.tax_secteur.nodes as node}
                    <span class="caption">{node.name}</span>
                {/each}
            {/if}

            {#if projet.informationsProjet.tax_savoirfaire }
                {#each projet.informationsProjet.tax_savoirfaire.nodes as node}
                    <span class="caption">{node.name}</span>
                {/each}
            {/if}

            {#if projet.informationsProjet.tax_materiau }
                {#each projet.informationsProjet.tax_materiau.nodes as node}
                    <span class="caption">{node.name}</span>
                {/each}
            {/if}
            
        </div>

        {#if projet.featuredImage}
            <div class="bloc_media">   
                <img src="{projet.featuredImage.node.sourceUrl}" srcset={projet.featuredImage.node.srcSet} sizes="{projet.featuredImage.node.sizes}" alt="{projet.featuredImage.node.altText}" />
            </div>
        {/if}
        
    </a>
</article>


<style lang="scss">

    .bloc_media {
        img {
            aspect-ratio: 4/5;
            width: 100%;
        }
    }
    svg {
        vertical-align: middle;
        margin-left: 4px;
    }
    :global(.swiper-slide.project.even) {
        img {
            aspect-ratio: 5/4;
        }
    }
</style>