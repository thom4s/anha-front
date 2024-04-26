<script>
    export let titre = '';
    export let logos = [];

    $: console.log('logos', logos)
</script>


<section class="module">
    <h2>{titre}</h2>

    {#if logos && logos?.length > 0}
        <div class="logos">
            {#each logos as logo }
                <img src="{logo.sourceUrl}" />
            {/each}
        </div>
    {/if}
</section>


<style lang="scss">
    .module {
        margin: 40px 0;
    }
    .logos {
        display: flex;
        gap: 20px;

        img { 
            object-fit: contain;
        }
    }
</style>