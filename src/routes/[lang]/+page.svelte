
<script lang="ts">
    import Flexibles from "$lib/parts/Flexibles.svelte";

    export let data: {
        homepage: Promise<void>;
    }
    $: ({page} = data)

</script>


<div class="container">
    <div>{@html page.content}</div>

    {#if page.contenusFlexibles?.contenusFlexibles }
        <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
    {/if}

</div>

