<script>
    export let references = [];
</script>


{#if references && references.length > 0}
    {#each references as ref }
        <a href="/{ref.uri}">{ref.title}</a>
    {/each}
{/if}


<style lang="scss">

</style>