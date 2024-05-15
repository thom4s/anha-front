<script lang="ts">
    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';
    export let page = {};
    $: ({stages } = page.contenusFlexiblesStaged)
</script>


<article>

        <h1 class="hidden">{page.title}</h1>


        {#if stages }

            {#each stages as stage}
                <div class="grid">

                    <div class="m_6column {stage.positionsticky}">
                        <div class="sticky fl-center">
                            {@html stage.stickyContent}

                        </div>
                    </div>

                    <div class="m_6column">

                        {#each stage.flexibleContents as layout}
                            {#if layout && layout.__typename }

                                <FlexibleLayouts {layout} />

                            {/if}
                        {/each}
                    </div>

                </div>
            {/each}

        {/if}


</article>


<style lang="scss">
    .hidden {
        visibility: hidden;
    }
    .sticky {
        position: sticky;
        top: 0;
        height: 100vh;
    }
    .right {
        order: 2;
    }
</style>