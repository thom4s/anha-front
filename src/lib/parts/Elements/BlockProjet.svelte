<script>
	import { fade } from 'svelte/transition';

    export let projet = {};
    export let type = '';

    $: console.log(projet)
    
</script>


<article class="block" transition:fade={{ duration: 200 }}>
    <a href="{projet.uri}">

        {#if projet.informationsProjet.tax_client }
            {#each projet.informationsProjet.tax_client.nodes as node}
                <div>{node.name}</div>
            {/each}
        {/if}

        <div class="bloc_title">
            <h2>{projet.title}</h2>
        </div>

        <div class="bloc_metadata fl-justify">
            {#if projet.informationsProjet.meta_date }
                {projet.informationsProjet.meta_date}
            {/if}

            {#if projet.informationsProjet.tax_secteur }
                {#each projet.informationsProjet.tax_secteur.nodes as node}
                    <span>{node.name}</span>
                {/each}
            {/if}

            {#if projet.informationsProjet.tax_savoirfaire }
                {#each projet.informationsProjet.tax_savoirfaire.nodes as node}
                    <span>{node.name}</span>
                {/each}
            {/if}

            {#if projet.informationsProjet.tax_materiau }
                {#each projet.informationsProjet.tax_materiau.nodes as node}
                    <span>{node.name}</span>
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
    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
    .bloc_media {
        img {
            width: 100%;
        }
    }
    .bloc_metadata {

    }
</style>