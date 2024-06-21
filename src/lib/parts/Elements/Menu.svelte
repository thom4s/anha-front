<script>
    import { menusStore } from "$lib/config/website";
    import { page } from '$app/stores';

    export let menuItems = [];


    $: pathname = $page.url.pathname + '/';

</script>


<nav class="">
    <ul>
        {#key menuItems}
            {#each menuItems.nodes as item}
                <li>
                    <a href="{item.path}" data-text="{item.label}" class="menu" class:active={pathname == item.path}>{item.label}</a>
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
        padding: $space-xs;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

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
        left: $space-xs;
        right: $space-xs;
        bottom: 0;
        height: 1px;
        background-color: black;
    }
}

</style>