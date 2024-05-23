<script>
    import Marqueeck from '@arisbh/marqueeck'; // https://marqueeck.vercel.app/docs/props

    export let titre = '';
    export let ligneLogos = [];

    const options1 = {
        direction: "right",
        speed: 30,
        onHover: "none"
    };
    const options2 = {
        direction: "left",
        speed: 50,
        onHover: "none"
    };
</script>


<section class="module">
    <h2>{titre}</h2>

    {#if ligneLogos && ligneLogos?.length > 0}
        <div class="logos">
            {#each ligneLogos as ligne, i }
                <div class="line-container">
                    <Marqueeck options={ (i & 1) ? { direction: "right" } : { direction: "left" } } class="line" {options1} >
                        {#each ligne.logos.nodes as logo }
                            <img src="{logo.sourceUrl}" />
                        {/each}
                    </Marqueeck>
                </div>
            {/each}
        </div>
    {/if}
</section>


<style lang="scss">
    .module {
        margin: 180px 0;
        overflow: hidden;
    }
    .line {
        display: flex;
        gap: 20px;
    }
    .line-container {
        border-top: 1px solid $dark-font;
        &:last-child {
            border-bottom: 1px solid $dark-font;
        }
    }
    img { 
        object-fit: contain;
        max-height: 180px;
    }
</style>