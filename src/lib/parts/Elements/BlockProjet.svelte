<script>
    import Arrow from '../Svgs/Arrow.svelte';
	import { fade } from 'svelte/transition';

    export let projet = {};
    export const type = '';    
</script>


<article class="block bloc_projet" transition:fade={{ duration: 200 }}>
    <a class="fl-column-space gap-xs" href="{projet.uri}">

        {#if projet.informationsProjet.tax_client }
            {#each projet.informationsProjet.tax_client.nodes as node}
                <div class="caption">{node.name}</div>
            {/each}
        {/if}

        <h4 class="h4 no-margin fl-vcenter gap-s">
                {projet.title}
                <Arrow />
        </h4>

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
            //aspect-ratio: 4/5;
            width: 100%;
        }
    }
    :global(.swiper-slide.project.even) {
        img {
            aspect-ratio: 5/4;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
    }
</style>