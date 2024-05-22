<script>
    export let cover_text = '';
    export let left_title = '';
    export let right_title = '';
    export let cover_img = '';

    $: console.log('HP COVER')
</script>

<section class="module hpcover">

    <img src="{cover_img}" alt="">

    <div class="content grid">
        <div class="m_6column">
            <h1 class="h1">{left_title}</h1>
            <div>{@html cover_text}</div>
        </div>

        <div class="m_6column">
            <h1 class="h1">{right_title}</h1>
        </div>
    </div>

</section>


<style lang="scss">
    .module {
        position: relative;
        height: 80vh;
    }
    img {
        height: 100%;
        width: 100%;
    }
    .content {
        padding: 200px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>