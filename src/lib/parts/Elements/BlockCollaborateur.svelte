<script>


export let layout = {}
$: console.log('layout: ', layout)
</script>

{#each layout.collaborateurs as collab}
<div class="">
    <p>{collab.name}</p>
    <p>{collab.job}</p>
    <img src="{collab.photo?.node.sourceUrl}" />
</div>
{/each}

