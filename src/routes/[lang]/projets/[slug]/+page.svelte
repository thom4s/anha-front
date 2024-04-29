
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
            <div>{@html page.content}</div>

            {#if page.informationsProjet.secteur}
                {#each page.informationsProjet.secteur.nodes as node}
                    <p>{node.name}</p>
                {/each}
            {/if}
            
            {#if page.informationsProjet.savoirFaire}
                {#each page.informationsProjet.savoirFaire.nodes as node}
                    <p>{node.name}</p>
                {/each}
            {/if}
        </article>

    {:else}
        <p>No content</p>
    {/if}

    
    {#if prevPage }
        <a href="{prevPage.node.uri}">Prev Project - {prevPage.node.title}</a>
    {/if}
    {#if nextPage }
        <a href="{nextPage.node.uri}">Next Project - {nextPage.node.title}</a>
    {/if}
</div>