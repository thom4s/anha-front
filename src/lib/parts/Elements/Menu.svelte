<script>
    import { menusStore } from "$lib/config/website";
    import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let menuItems = [];

    const menuItemClicked = () => {
        console.log('menuItemClicked')
		dispatch('menuItemClicked');
    }

    $: pathname = $page.url.pathname + '/';

</script>


<nav class="">
    <ul>
        {#key menuItems}
            {#each menuItems.nodes as item}
                <li>
                    <a href="{item.path}" data-text="{item.label}" class="menu" class:active={pathname == item.path} on:click={ () => menuItemClicked() }>{item.label}</a>
                </li>
            {/each}
        {/key}

    </ul>
</nav>



<style lang="scss">

ul {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;

    a {
        padding: $space-xs  $space-xs  $space-xs 0;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        line-height: .5;

        &::after {
                content: attr(data-text);
                content: attr(data-text) / "";
                height: 0;
                visibility: hidden;
                overflow: hidden;
                user-select: none;
                pointer-events: none;
                font-weight: 900;
        }
        
        &:hover {
            font-weight: 900;
        }
    }

    @include max(bigtablet) {
        flex-direction: column;
        align-items: flex-start;

        a {
            padding-left: 0;
        }
    }
}
.active {
    font-weight: bold;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: $space-xs;
        bottom: 0;
        height: 1px;
        background-color: black;
    }
}

</style>