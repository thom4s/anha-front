<script lang="ts">
    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';
    export let page = {};
    $: ({stages } = page.contenusFlexiblesStaged)
</script>



<article class="">

    <h1 class="visualy-hidden">{page.title}</h1>

        {#if stages }

            {#each stages as stage}

                <div class="grid stage" class:inversed={stage.positionsticky == 'right' } >

                    <div class="m_6column stage_left stage_sticky">

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
    .inversed {
        & > :first-child {
            order: 2;
        }
        :global(.mod_collaborateurs) {
            padding-left: $gutter * 2;
        }
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
        padding: 0 $gutter * 2;
    }
</style>