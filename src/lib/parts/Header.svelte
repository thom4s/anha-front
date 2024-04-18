<script>
    export let menuItems = []
    export let menuItemsSecondary = []
</script>
<header>
    <nav>
        <ul>
            {#each menuItems.nodes as item}
                <li><a href="{item.path}">{item.label}</a></li>
            {/each}
        </ul>
    </nav>

    <h1><a href="/">Anha</a></h1>

    <nav>
        <ul>
            {#each menuItemsSecondary.nodes as item}
                <li><a href="{item.path}">{item.label}</a></li>
            {/each}
        </ul>
    </nav>


</header>



<style lang="scss">
    header {
        display: flex;
        align-items: center;
        gap: 40px;
    }
    ul {
        display: flex;
        gap: 10px;
        list-style: none;
        a {
            padding: 10px;
        }
    }

</style>