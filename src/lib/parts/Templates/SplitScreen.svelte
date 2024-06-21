<script lang="ts">
    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';
    export let page = {};
    $: ({stages } = page.contenusFlexiblesStaged)
</script>



<article class="">

    <h1 class="visualy-hidden">{page.title}</h1>

        {#if stages }

            {#each stages as stage}

                <div class="grid stage">

                    <div class="m_6column stage_left stage_sticky {stage.positionsticky}">

                        <div class="sticky fl-hcenter fl-column gap-l">
                            <div class="stage_txt">{@html stage.stickyContent}</div>
                        </div>

                    </div>

                    <div class="m_6column stage_right stage_contents">

                        {#each stage.contenusFlexibles as layout}
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
    .stage {
        & + & {
            .sticky {
                top: 30%;
                justify-content: flex-start;
            }
        }
    }
    .stage_txt {
        max-width: calc($max-width / 2);
        padding: $gutter * 2;
    }
</style>