<script>
    import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import NotFound from '$lib/parts/Navigations/NotFound.svelte';
</script>


<NotFound />


<PushContact />


<style lang="scss">
    article {
        padding: 200px 0;

        & > div {
            width: 50%;
        }
    }
</style>