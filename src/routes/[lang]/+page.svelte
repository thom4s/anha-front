
<script lang="ts">
    import Flexibles from "$lib/parts/Flexibles.svelte";

    export let data: {
        homepage: Promise<void>;
    }
    $: ({page} = data)

</script>


<div class="container">
    <h1>{page.title}</h1>
    <div>{@html page.content}</div>

    {#if page.contenusFlexibles?.contenusFlexibles }
        <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
    {/if}

</div>

