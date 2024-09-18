
<script lang="ts">
    import Flexibles from "$lib/parts/Flexibles.svelte";
	import PushContact from "$lib/parts/Modules/PushContact.svelte";
    import IconArrowDown from '$lib/parts/Svgs/IconArrowDown.svelte';

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)

</script>


<div class="template-home">


    <div class="down_icon">
        <IconArrowDown />
    </div>

    {#if page.contenusFlexibles?.contenusFlexibles }
        <Flexibles contenusFlexibles={page.contenusFlexibles?.contenusFlexibles}/>
    {/if}

</div>


<PushContact />


<style lang="scss">
    .down_icon {
        position: fixed;
        bottom: $space-xl;
        left: 0;
        right: 0;
        text-align: center;
        animation-name: movingArrow;
        animation-duration: .5s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes movingArrow {
        from {
            bottom: $space-xl;
        }
        to {
            bottom: $space-xl (+5);
        }
    }
    :global(path) {
        stroke: black;
    }
</style>