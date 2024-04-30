<script>
    import { activeLang } from "$lib/config/website";
    import LangSwitcher from "$lib/parts/LangSwitcher.svelte";

    export let menuItems = []
    export let menuItemsSecondary = []
    export let langs = []

    $: console.log('HEADER activeLang', $activeLang)
    $: console.log('HEADER menuItems', menuItems)
    $: console.log('HEADER langs', langs)
    $: console.log('HEADER menuItemsSecondary', menuItemsSecondary)
    
</script>

<header>
    <div class="container">
        <nav>
            <ul>
                {#each menuItems.nodes as item}
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
        margin-bottom: 80px;
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