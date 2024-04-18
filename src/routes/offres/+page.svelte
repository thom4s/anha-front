<script lang="ts">
    import BlockPost from "$lib/parts/BlockPost.svelte";

    export let data: {
        offres: Promise<void>;
    }
    $: ({offres} = data)
    $: console.log(offres)

</script>

<div class="container">

    <h1>Offres d'emploi</h1>

    {#each offres.nodes as post }
        <BlockPost {post} type="offres"/>
    {/each}

</div>