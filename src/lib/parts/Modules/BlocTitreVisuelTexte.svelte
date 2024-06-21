<script>
    export let titre = '';
    export let visuel = '';
    export let texte = '';
    export let design = 'full';
    export let ratio = 'full';

</script>

<div class="module mod_tvt fl-column media-{design}" data-ratio="{ratio}">

    <div class="wrapper_txt">
        <div class="mod_tvt_txts">
            {#if titre !== null }
                <h2 class="h2 mb-medium">{@html titre}</h2>
            {/if}
                
            {#if texte !== null }
                <div class="body">
                    {@html texte}
                </div>
            {/if}
        </div>
    </div>

    <div class="wrapper_media">
        <div class="mod_media">
            <img src="{visuel?.node?.sourceUrl}">
        </div>
    </div>

</div>


<style lang="scss">
    .module {
        justify-content: center;
        margin-bottom: $space-xxl * 2;
    }
    .media-full {
        img {
            width: 100%;
            max-height: 95vh;
        }

        .wrapper_txt {
            padding-bottom: $space-l;
        }
    }
    .media-left {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        .wrapper_txt {
            width: 50%;
            flex: 0 0 50%;
        }
        
        .wrapper_media {
            width: 50%;
            flex: 0 0 50%;
        }
    }
    .media-right {
        display: flex;
        flex-direction: row;
        align-items: center;

        .wrapper_txt {
            width: 50%;
            flex: 0 0 50%;
        }
    }

</style>