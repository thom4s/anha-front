<script>
    import Marqueeck from '@arisbh/marqueeck';

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
                <Marqueeck class="line" {options1} >
                    {#each ligne.logos.nodes as logo }
                        <img src="{logo.sourceUrl}" />
                    {/each}
                </Marqueeck>
            {/each}
        </div>
    {/if}
</section>


<style lang="scss">
    .module {
        margin: 40px 0;
    }
    .line {
        display: flex;
        gap: 20px;
    }
    img { 
        object-fit: contain;
    }
</style>