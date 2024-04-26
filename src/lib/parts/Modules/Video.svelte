<script>
    export let titre = '';
    export let video = '';
</script>

<div class="module">
    <h2>{titre}</h2>
    <div class="vid_container">
        {@html video}
    </div>
</div>


<style lang="scss">
    .module {
        margin: 40px 0;
    }
    .vid_container {
        height: 50vh;
    }

</style>