<script lang="ts">
    import Flexibles from '$lib/parts/Flexibles.svelte';

    export let page = {};
    export let posts = [];

</script>


<article>

    <h1>{page.title}</h1>
    <div>{@html page.content}</div>

    {#if page.contenusFlexibles.contenusFlexibles }
        <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
    {/if}
</article>


<style lang="scss">

</style>