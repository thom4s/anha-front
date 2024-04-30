
<script lang="ts">
    export let data: {
        page: Promise<void>;
    }
    $: ({page, prevPage, nextPage} = data)

$: console.log(prevPage, nextPage)
</script>




<div class="container">
    {#if page}

        <article  data-id="{page.id}" data-dbid={page.databaseId}>

            <h1>{page.title}</h1>

            <div class="id">
                <p>date: {@html page.informationsProjet.meta_date}</p>

                {#if page.informationsProjet.tax_secteur}
                    {#each page.informationsProjet.tax_secteur.nodes as node}
                        <p>Secteur : {node.name}</p>
                    {/each}
                {/if}
                
                {#if page.informationsProjet.tax_savoirfaire}
                    {#each page.informationsProjet.tax_savoirfaire.nodes as node}
                        <p>Savoir Faire: {node.name}</p>
                    {/each}
                {/if}

                {#if page.informationsProjet.tax_materiau}
                    {#each page.informationsProjet.tax_materiau.nodes as node}
                        <p>Materiaux: {node.name}</p>
                    {/each}
                {/if}
            </div>

            <div>{@html page.content}</div>


        </article>

    {:else}
        <p>No content</p>
    {/if}

    
    <div class="fl-justify">
        {#if prevPage }
            <a href="{prevPage.node.uri}">Prev Project - {prevPage.node.title}</a>
        {/if}
        {#if nextPage }
            <a href="{nextPage.node.uri}">Next Project - {nextPage.node.title}</a>
        {/if}
    </div>
</div>