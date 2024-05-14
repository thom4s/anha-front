<script>


export let layout = {}
$: console.log('layout: ', layout)
</script>

<div class="module snap">
    {#each layout.collaborateurs as collab}
        <div class="">
            <p>{collab.name}</p>
            <p>{collab.job}</p>
            <img src="{collab.photo?.node.sourceUrl}" />
        </div>
    {/each}
</div>


<style lang="scss">
    .module {
        margin: 40px 0;
        height: 100vh;
    }
</style>