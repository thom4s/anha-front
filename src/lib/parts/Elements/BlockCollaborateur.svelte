<script>
export let layout = {}
$: console.log('layout: ', layout)
</script>

<div class="module collaborateurs" data-module="collaborateurs">
    {#each layout.collaborateurs as collab}
        <div class="item">
            <div>
                <img src="{collab.photo?.node.sourceUrl}" alt="" />
            </div>
            <div>
                <p class="no-margin">{collab.name}</p>
                <p class="no-margin caption">{collab.job}</p>
            </div>
            <div>
                {@html collab.details}
            </div>

        </div>
    {/each}
</div>


<style lang="scss">
    .module {
        margin: 40px 0;
        height: 100vh;
    }

    .item {
        border-top: 1px solid;
        padding: $space-m 0;
        display: flex;
        gap: $gutter;
    }
</style>