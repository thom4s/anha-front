<script>
	import { fade } from 'svelte/transition';

    export let projet = {};
    export let type = '';

    $: console.log(projet)
    
</script>


<article class="block" transition:fade={{ duration: 200 }}>
    <h2>{projet.title}</h2>
    <div>{@html projet.excerpt}</div>

    <p>
        {#if projet.informationsProjet.meta_date }
            {projet.informationsProjet.meta_date}
            <span> - </span>
        {/if}

        {#if projet.informationsProjet.tax_secteur }
            {#each projet.informationsProjet.tax_secteur.nodes as node}
                <span>{node.name}</span>
            {/each}
            <span> - </span>
        {/if}

        {#if projet.informationsProjet.tax_savoirfaire }
            {#each projet.informationsProjet.tax_savoirfaire.nodes as node}
                <span>{node.name}</span>
            {/each}
            <span> - </span>
        {/if}

        {#if projet.informationsProjet.tax_materiau }
            {#each projet.informationsProjet.tax_materiau.nodes as node}
                <span>{node.name}</span>
            {/each}
        {/if}
        
    </p>
    <a href="{projet.uri}">En savoir plus</a>
</article>