
<script lang="ts">
    export let data: {
        collaboration: Promise<void>;
    }
    $: ({collaboration} = data)

</script>

<div class="container">
    {#if collaboration}
        <h1>{collaboration.title}</h1>
        <div>{@html collaboration.content}</div>
    {:else}
        <p>No content</p>
    {/if}
</div>