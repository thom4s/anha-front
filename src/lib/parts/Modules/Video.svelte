<script>
    import Video from "../Elements/Video.svelte";

    export let titre = '';
    export let videoId = '';
    export let plateforme = '';
</script>

<div class="module">

    <h2>{titre}</h2>

    <div class="vid_container">
        <Video 
            {plateforme}
            {videoId}
        />
    </div>

</div>


<style lang="scss">
    .module {
        margin: 180px 0;
    }
    .plyr__video-embed {
        max-height: 50vh;
    }

</style>