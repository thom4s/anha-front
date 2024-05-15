<script>
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
</script>


<article class="fl-justify">
    
    <div class="fl-center">
        <h1>Page non trouvée</h1>
    </div>

    <div class="fl-center">
        <div>
            <p>Vous ne trouvez pas ce que vous cherchez ? </p>
            <a href="/projets">Découvrez nos projets</a>
            <a href="/contact">Contactez nous</a>
        </div>

    </div>
</article>


<PushContact />


<style lang="scss">
    article {
        padding: 200px 0;

        & > div {
            width: 50%;
        }
    }
</style>