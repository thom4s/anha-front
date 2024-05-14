<script>
    export let titre = '';
    export let visuel = '';
    export let texte = '';
</script>

<div class="module fl-center snap">
    <h2>{titre}</h2>
    <div class="">
        <img src="{visuel?.node?.sourceUrl}">
    </div>
    {@html texte}
</div>


<style lang="scss">
    .module {
        margin: 40px 0;
        height: 100vh;
    }
</style>