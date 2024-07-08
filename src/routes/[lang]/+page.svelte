
<script lang="ts">
    import Flexibles from "$lib/parts/Flexibles.svelte";
	import PushContact from "$lib/parts/Modules/PushContact.svelte";

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

</script>


<div class="">

    {#if page.contenusFlexibles?.contenusFlexibles }
        <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
    {/if}

</div>


<PushContact />


<style lang="scss">

</style>