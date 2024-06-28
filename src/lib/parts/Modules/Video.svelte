<script>
    import { Plyr } from "svelte-plyr";

    let player, src;

    export let titre = '';
    export let video = '';
    export let plateforme = '';
    
    if( plateforme[0]  === 'youtube') {
        src = `https://www.youtube.com/embed/${video}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`
    }
    else if ( plateforme[0]  === 'vimeo' ) {
        src = `https://player.vimeo.com/video/${video}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`
    }

</script>

<div class="module">
    <h2>{titre}</h2>
    <div class="vid_container">

        <div class="youtube-plyr">
            <Plyr bind:player={player} hideControls="true">
              <div class="plyr__video-embed">
                <iframe
                  src="{src}"
                  allowfullscreen 
                  allowtransparency 
                  allow="autoplay">
                </iframe>
              </div>
            </Plyr>
          </div>
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