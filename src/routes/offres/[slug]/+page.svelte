<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'


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
        <p>No content</p>
    {/if}
</div>