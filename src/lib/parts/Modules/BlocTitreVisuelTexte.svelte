<script>
    export let titre = '';
    export let visuel = '';
    export let texte = '';
    export let design = 'full';

</script>

<div class="module fl-column gap-m media-{design}" data-module="media">

    {#if titre !== null && texte !== null }
        <div class="module_txt">
            {#if titre !== null }
                <h2 class="h2 mb-medium">{@html titre}</h2>
            {/if}
            
            {#if texte !== null }
                <div class="body">
                    {@html texte}
                </div>
            {/if}
        </div>
    {/if}

    <div class="module_media">
        <img src="{visuel?.node?.sourceUrl}">
    </div>

</div>


<style lang="scss">
    .module {
        justify-content: center;
        margin-bottom: $space-xxl * 2;
    }
    .media-full {
        img {
            width: calc(100% + 5vw);
            max-width: none;
        }

        @include min(desktop) {
            
        }
    }
    .media-left {
        display: flex;
        flex-direction: row-reverse;
        gap: $space-l;

        @include min(desktop) {
            
        }
    }
    .media-right {
        display: flex;
        flex-direction: row;
        gap: $space-l;

        .module_txt {
            width: 50%;
        }
        img {
            width: calc(100% + 5vw);
            max-width: none;
        }

        @include min(desktop) {
            
        }
    }
</style>