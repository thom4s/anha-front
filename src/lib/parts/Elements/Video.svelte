<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    // DATAS
    export let plateforme = '';
    export let videoId = '';

    let player, src;

    if (plateforme[0] === 'youtube') {
        src = `https://www.youtube.com/embed/${videoId}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`;
    } else if (plateforme[0] === 'vimeo') {
        src = `https://player.vimeo.com/video/${videoId}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`;
    }

    const dispatch = createEventDispatcher();

    let Plyr;
    let plyrLoaded = false;

    onMount(async () => {
        const module = await import('svelte-plyr');
        Plyr = module.Plyr;
        plyrLoaded = true;
    });
</script>

{#if plyrLoaded}
    <div class="media_container">
        <div class="plateforme-plyr">
            <Plyr bind:player={player} controls={['play-large', 'progress', 'mute', 'volume', 'fullscreen']}>
                <div class="plyr__video-embed">
                    <iframe src={src} allowfullscreen allowtransparency allow="autoplay"></iframe>
                </div>
            </Plyr>
        </div>
    </div>
{/if}

<style lang="scss">
    .media_container {
        width: 100%;
        height: 100%;
    }
    .plateforme-plyr {
        height: 100%;
    }

    .clickable:hover {
        cursor: zoom-in;
        cursor: url('$lib/assets/svg/arrowfull.svg'), auto;
    }
    :global(.plyr__controls) {
        opacity: .1;
    }
    :global(.plyr__controls:hover) {
        opacity: .7;
    }
    :global(.plyr__time--current, .plyr__menu) {
         display: none;
    }
</style>