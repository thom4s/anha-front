<script>
    export let titre = '';
    export let contentOne = '';
    export let contentTwo = '';
</script>


<section class="module container">
    <!-- <h2>{titre}</h2> -->

    <div class="contents">
        <div class="chapo">{@html contentOne}</div>
        <div class="body">{@html contentTwo}</div>
    </div>
</section>


<style lang="scss">
    .module {
        margin-top: 180px;
        margin-bottom: 180px;
    }
    .contents {
        display: flex;
        gap: 30px;
    }
</style>