<script>
    export let menuItemsPrimary = []
    export let menuItemsSecondary = []
    export let menuItemsFooter = []

</script>
<footer>
    <div class="container">
        <nav>
            <ul>
                {#each menuItemsPrimary.nodes as item}
                    <li><a href="{item.path}">{item.label}</a></li>
                {/each}
                {#each menuItemsSecondary.nodes as item}
                    <li><a href="{item.path}">{item.label}</a></li>
                {/each}
            </ul>
        </nav>

        <nav>
            <ul>
                {#each menuItemsFooter.nodes as item}
                    <li><a href="{item.path}">{item.label}</a></li>
                {/each}
            </ul>
        </nav>

    </div>
</footer>



<style>
    footer {
        margin-top: 80px;
        border-top: 1px solid;
        padding-top: 40px;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }
    ul {
        display: flex;
        gap: 10px;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        padding: 10px;
    }
</style>