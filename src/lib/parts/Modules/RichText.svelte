<script>
    export let titre = '';
    export let contentOne = '';
    export let contentTwo = '';
</script>


<section class="module">
    <h2>{titre}</h2>

    <div class="contents">
        <div>{@html contentOne}</div>
        <div>{@html contentTwo}</div>
    </div>
</section>


<style lang="scss">
    .module {
        margin: 40px 0;
    }
    .contents {
        display: flex;
        gap: 60px;
    }
</style>