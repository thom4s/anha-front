
<script lang="ts">
    export let data: {
        projet: Promise<void>;
    }
    $: ({projet} = data)

</script>

<div class="container">
    {#if projet}
        <h1>{projet.title}</h1>
        <div>{@html projet.content}</div>
    {:else}
        <p>No content</p>
    {/if}
</div>