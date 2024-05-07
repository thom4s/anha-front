<script lang="ts">
    import Flexibles from '$lib/parts/Flexibles.svelte';
    export let page = {};
</script>


<article>
    <div class="grid">

        <div class="m_6column">
            <h1 class="hidden">{page.title}</h1>
            <div>{@html page.content}</div>
        </div>

        <div class="m_6column">
            {#if page.contenusFlexibles.contenusFlexibles }
                <Flexibles swipered contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
            {/if}
        </div>

    </div>
</article>


<style lang="scss">
    .hidden {
        visibility: hidden;
    }
</style>