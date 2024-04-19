<script>

    export let projet = {};
    export let type = '';
    
</script>


<article class="block">
    <h2>{projet.title}</h2>
    <div>{@html projet.excerpt}</div>

    <p>
        {#each projet.informationsProjet.secteur.nodes as node}
            <span>{node.name}</span>
        {/each}
        <span> - </span>
        {#each projet.informationsProjet.savoirFaire.nodes as node}
            <span>{node.name}</span>
        {/each}
    </p>
    <a href="/projets/{projet.slug}">En savoir plus</a>
</article>