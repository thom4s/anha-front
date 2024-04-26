<script lang="ts">
    import Flexibles from '$lib/parts/Flexibles.svelte';

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)
    $: console.log( 'Flexible: ', page.contenusFlexibles?.contenusFlexibles  )
    $: console.log( 'Page: ', page  )
</script>

<div class="container">
    {#if page}
        <h1>{page.title}</h1>
        <div>{@html page.content}</div>

        {#if page.contenusFlexibles.contenusFlexibles }
            <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
        {/if}

    {:else}
        <p>No content</p>
    {/if}
</div>