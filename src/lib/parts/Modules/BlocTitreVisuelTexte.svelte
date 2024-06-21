<script>
    export let visuel = '';
    export let texte = '';
    export let design = 'full';
    export let ratio = 'full';

</script>

<div class="module mod_tvt fl-column media-{design}" data-ratio="{ratio}">

    {#if texte !== null }
        <div class="wrapper_txt">
            <div class="mod_tvt_txts">
                <div class="body">
                    {@html texte}
                </div>
            </div>
        </div>
    {/if}

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