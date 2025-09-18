<script>
    import Image from "$lib/parts/Elements/Image.svelte";

    export const titre = '';
    export let ligneLogos = [];
</script>


<section class="module" data-module="references">
    <!-- <h2>{titre}</h2> -->

    {#if ligneLogos && ligneLogos?.length > 0}
        <div class="logos ">

            {#each ligneLogos as ligne, i }
                <div class="marquee-container marquee">

                    <ul class="marquee__content marquee-line">
                        {#each ligne.logos.nodes as logo }
                           <li><Image node={logo} /></li>
                        {/each}
                    </ul>

                    <!-- Mirrors the content above -->
                    <ul class="marquee__content marquee-line" aria-hidden="true">
                        {#each ligne.logos.nodes as logo }
                            <li><Image node={logo} /></li>
                        {/each}
                    </ul>

                </div>
            {/each}

        </div>
    {/if}
</section>


<style lang="scss">
    .module {
        margin:  $space-wide 0;
        overflow: hidden;
    }

    .marquee-container {
        border-top: 1px solid $dark-font;
        padding: $space-s 0;
        &:last-child {
            border-bottom: 1px solid $dark-font;
        }
    }

    .marquee {
        display: flex;
        overflow: hidden;
        user-select: none;
        justify-content: space-between;
    }

    .marquee__content {
        list-style: none;
        padding: 0 20px;
        margin: 0;
        gap: 20px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        min-width: 100vw;
        animation: scroll 60s linear infinite;

        li {
            flex: 0 0 auto;
        }
    }



    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX( calc( -100% - 1rem ));
        }
        }

</style>