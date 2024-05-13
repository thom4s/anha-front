<script>
    import { activeLang } from "$lib/config/website";
    import LangSwitcher from "$lib/parts/LangSwitcher.svelte";

    export let menuItemsPrimary = []
    export let menuItemsSecondary = []
    export let langs = []
    
</script>

<header>
    <div class="container">
        <nav>
            <ul>
                {#each menuItemsPrimary.nodes as item}
                    <li><a href="{item.path}">{item.label}</a></li>
                {/each}
            </ul>
        </nav>

        <h1><a href="/{$activeLang}">Anha</a></h1>

        <nav>
            <ul>
                {#each menuItemsSecondary.nodes as item}
                    <li><a href="{item.path}">{item.label}</a></li>
                {/each}

                <LangSwitcher {langs} />
            </ul>
        </nav>

    </div>
</header>



<style lang="scss">

    header {
        border-bottom: 1px solid;
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

        a {
            padding: 10px;
        }
    }

</style>