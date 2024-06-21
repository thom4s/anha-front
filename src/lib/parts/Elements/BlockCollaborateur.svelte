<script>
export let layout = {}
$: console.log('layout: ', layout)
</script>

<div class="module mod_collaborateurs">
    {#each layout.collaborateur as collab}
        <div class="item grid">
            <div class="mod_media s_1column">
                <div class="square">
                    <div class="inner">
                        <img src="{collab.photo?.node.sourceUrl}" alt="" />
                    </div>
                </div>
            </div>
            <div class="mod_title s_2column">
                <p class="no-margin">{collab.name}</p>
                <p class="no-margin caption">{collab.job}</p>
            </div>
            <div class="mod_details s_3column">
                {@html collab.details}
            </div>

        </div>
    {/each}
</div>


<style lang="scss">
    .item {
        border-top: 1px solid;
        padding: $space-m 0;
    }
    .mod_media {
        img {
            border-radius: 50%;
            overflow: hidden;
        }
    }
</style>