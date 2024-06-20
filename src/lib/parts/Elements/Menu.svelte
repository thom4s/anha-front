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
                    <a href="{item.path}" class="menu" class:active={pathname == item.path}>{item.label}</a>
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
        display: inline-block;
    }

    @include max(bigtablet) {
        flex-direction: column;
        align-items: flex-start;

        a {
            padding-left: 0;
        }
    }
}

</style>