<script lang="ts">
    import Flexibles from '$lib/parts/Flexibles.svelte';
    import Projet from '$lib/parts/Templates/Projet.svelte';
    export let data: {
        page: Promise<void>;
    }
    $: ({page, projets, savoirfaires, secteurs} = data)

    $: console.log( 'Flexible: ', page.contenusFlexibles?.contenusFlexibles  )
    $: console.log( 'Page: ', page  )
</script>

<div class="container">
    {#if page}

        {#if page.template.templateName === 'Page Projets'}

            <Projet {page} {projets} {savoirfaires} {secteurs} />
            
        {:else}

            <h1>{page.title}</h1>
            <div>{@html page.content}</div>

            {#if page.contenusFlexibles.contenusFlexibles }
                <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
            {/if}
        {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>