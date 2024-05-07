<script lang="ts">
    import Flexibles from '$lib/parts/Flexibles.svelte';

    export let page = {};
    export let posts = [];

</script>


<article>

    <div class="grid">

        <div class="m_4column">

        </div>

        <div class="m_8column">
            <h1>{page.title}</h1>
            <div>{@html page.content}</div>
    
            {#if page.contenusFlexibles.contenusFlexibles }
                <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
            {/if}
        </div>

    </div>

</article>


<style lang="scss">

</style>