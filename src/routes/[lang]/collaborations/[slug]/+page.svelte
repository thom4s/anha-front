
<script lang="ts">
    import NotFound from '$lib/parts/Navigations/NotFound.svelte';

    export let data: {
        collaboration: Promise<void>;
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