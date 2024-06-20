<script lang="ts">
    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';
    export let page = {};
    $: ({stages } = page.contenusFlexiblesStaged)
</script>



<article class="container">

    <h1 class="visualy-hidden">{page.title}</h1>

        {#if stages }

            {#each stages as stage}

                <div class="grid">

                    <div class="m_6column splitLeft {stage.positionsticky}">

                        <div class="sticky fl-hcenter fl-column gap-l">
                            <div class="">{@html stage.stickyContent}</div>
                        </div>

                    </div>

                    <div class="m_6column splitRight-marged">

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
    .sticky {
        position: sticky;
        top: 0;
        height: 100vh;
    }
    .right {
        order: 2;
    }
</style>