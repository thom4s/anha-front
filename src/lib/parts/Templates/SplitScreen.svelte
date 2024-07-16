<script lang="ts">
    import PushContact from '../Modules/PushContact.svelte';
    import FlexibleLayouts from '$lib/parts/FlexibleLayouts.svelte';
    export let page = {};
    $: ({stages } = page.contenusFlexiblesStaged)
</script>



<article class="">

    <h1 class="visualy-hidden">{page.title}</h1>

        {#if stages }

            {#each stages as stage}

                <div class="grid stage" class:inversed={stage.positionsticky == 'right' } >

                    <div class="s_12column m_6column stage_left stage_sticky">

                        <div class="sticky fl-hcenter fl-column gap-l">
                            <div class="stage_txt">{@html stage.stickyContent}</div>
                        </div>

                    </div>

                    <div class="s_12column m_6column stage_right stage_contents">

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


<PushContact />


<style lang="scss">
    article {
        margin-top: $space-xxl * 2;
    }
    .inversed {
        & > :first-child {
            @include min(tablet) {
                order: 2;
            }
        }
        :global(.mod_collaborateurs) {
            @include max(tablet) {
                padding-left: $gutter;
                padding-right: $gutter;
            }
            @include min(tablet) {
                padding-left: $gutter * 2;
            }
        }
    }
    .stage {
        gap: 0;

        & .sticky {
            @include min(tablet) {
                height: 90vh;
            }
        }

        & + & {
            .sticky {
                height: auto;
                top: 15%;
                justify-content: flex-start;
            }
        }

    }
    .stage_left {
        @include max(tablet) {
            @include container;
        }
    }
    .stage_txt {
        max-width: 1040px;

        .stage_left & {
            @include min(desktop) {
                padding-left:  calc( calc( 100vw - $max-width ) / 2 );
                padding-right: 120px;
            }
        }
        .inversed & {
            @include min(desktop) {
                padding-left:  120px;
                padding-right: calc( calc( 100vw - $max-width ) / 2 );
            }
        }

        @include min(bigtablet) {
            padding-right: 120px;
            padding-left: 120px;
            padding-bottom: 120px;
        }
        @include max(bigtablet) {
            padding-right: $gutter * 2;
            padding-left: $gutter * 2;
        }        
        @include max(tablet) {
            padding-right: 0;
            padding-left: 0;
            padding-bottom: 60px;
        }
    }

    :global(.stage_txt h1) {
        @include max(tablet) {
            margin-bottom: $space-m;
        }
    }
</style>