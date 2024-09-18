<script>
    import { menusStore } from "$lib/config/website";
    import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
    import { afterUpdate } from "svelte";
    import { device } from "$stores/device";

	const dispatch = createEventDispatcher();

    export let menuItems = [];
    let border, menuOuter;

    const menuItemClicked = () => {
		dispatch('menuItemClicked');
    }

    $: pathname = $page.url.pathname + '/';

    afterUpdate( () => {

        let menuLinks = menuOuter.querySelectorAll("li");

        for (var i = 0; i < menuLinks.length; i++) {

            menuLinks[i].addEventListener("mouseover", function() {

                if( ! this.classList.contains('active') && $device === "desktop") {

                    var itemRect = this.getBoundingClientRect();
                    var menuRect = this.parentNode.getBoundingClientRect();
                    var leftPos = itemRect.left - menuRect.left;
                    var width = itemRect.width;

                    border.style.transform = "translateX(" + leftPos + "px)";
                    border.style.width = width + "px";
                }

            });

            menuLinks[i].addEventListener("mouseout", function() {
                border.style.width = '0px';
            });
        }
    })

</script>


<nav bind:this={menuOuter} class="menu-outer">
    <ul class="">
        {#key menuItems}
            {#each menuItems.nodes as item}
                <li class:active={pathname == item.path}>
                    <a href="{item.path}" data-text="{item.label}" class="menu-link"on:click={ () => menuItemClicked() }>{item.label}</a>
                </li>
            {/each}
        {/key}

        <div bind:this={border} class="border"></div>

    </ul>
</nav>



<style lang="scss">

ul {
    display: flex;
    align-items: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;

    @include max(tablet) {
        gap: 40px;
    }

    li {
        position: relative;
    }

    a {
        padding: 0;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        line-height: 1;
        position: relative;
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
    pointer-events: none;

    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;
        height: 1px;
        background-color: black;
    }
}

    .border {
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 1px;
        background-color: #333;
        transition: transform 0.3s ease, width 0.3s ease;
        z-index:-1;
    }

</style>