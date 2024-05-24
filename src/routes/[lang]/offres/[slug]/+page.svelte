<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { config } from '$lib/config/website.js'
    import NotFound from '$lib/parts/Navigations/NotFound.svelte';

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

</script>

<div class="container">
    {#if page}
        <h1>{page.title}</h1>
        <div>{@html page.content}</div>
    {:else}
        <NotFound />
    {/if}
</div>