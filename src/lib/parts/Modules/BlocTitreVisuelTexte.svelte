<script>
    export let titre = '';
    export let visuel = '';
    export let texte = '';
</script>

<div class="module fl-column gap-m snap">

    <h2 class="h2 no-margin txt-center">{titre}</h2>

    <div class="">
        <img src="{visuel?.node?.sourceUrl}">
    </div>

    <div class="body">
        {@html texte}
    </div>

</div>


<style lang="scss">
    .module {
        height: 100vh;
        justify-content: center;
    }
    h2 {
        align-self: center;
        text-align: center;
    }
    img {
        aspect-ratio: 5/4;
    }
</style>