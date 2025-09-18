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
    .marquee-line {
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
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
        justify-content: flex-start;
    }

    .marquee__content {
        list-style: none;
        flex-shrink: 0;
        display: flex;
        justify-content: space-around;
        min-width: 100%;
        animation: scroll 40s linear infinite;
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