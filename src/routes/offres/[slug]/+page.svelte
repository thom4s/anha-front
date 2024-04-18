
<script lang="ts">
    export let data: {
        offre: Promise<void>;
    }
    $: ({offre} = data)

</script>

<div class="container">
    {#if offre}
        <h1>{offre.title}</h1>
        <div>{@html offre.content}</div>
    {:else}
        <p>No content</p>
    {/if}
</div>