<script>
    export let menuItems = []
</script>
<header>
    <nav>
        <ul>
            {#each menuItems.nodes as item}
                <li><a href="{item.path}">{item.label}</a></li>
            {/each}
        </ul>
    </nav>
</header>



<style lang="scss">
    ul {
        display: flex;
        gap: 10px;
        list-style: none;
        a {
            padding: 10px;
        }
    }

</style>