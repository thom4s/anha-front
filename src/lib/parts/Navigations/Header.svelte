<script>
    import { activeLang } from "$lib/config/website";
    import LangSwitcher from "$lib/parts/LangSwitcher.svelte";
    import { page } from '$app/stores';
	import logo from '$lib/assets/logo_anha_nb.png';
	import logo_nobaseline from '$lib/assets/logo_anha_nobaseline.png';

    export let menuItemsPrimary = []
    export let menuItemsSecondary = []
    export let langs = []
    
    $: console.log( 'pathname', $page.url.pathname)
    $: pathname = $page.url.pathname + '/';

</script>

<header>
    <div class="container">
        <nav>
            <ul>
                {#each menuItemsPrimary.nodes as item}
                    <li>
                        <a href="{item.path}" class:active={pathname == item.path}>{item.label}</a>
                    </li>
                {/each}
            </ul>
        </nav>

        {#if $page.url.pathname === '/fr' || $page.url.pathname === '/en' }
            <h1>
                <a href="/{$activeLang}" class="brand_logo">
                    <img src="{logo_nobaseline}" alt="logo" />
                </a>
            </h1>
        {:else}
            <a href="/{$activeLang}" class="brand_logo">
                <img src="{logo}" alt="logo"/>
            </a>
        {/if}
        <nav>
            <ul>
                {#each menuItemsSecondary.nodes as item}
                    <li>
                        <a href="{item.path}" class:active={pathname == item.path}>{item.label}</a>
                    </li>
                {/each}

                <LangSwitcher {langs} />
            </ul>
        </nav>

    </div>
</header>



<style lang="scss">

    header {
        border-bottom: 1px solid;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        transform: translateY(0);
        background-color: white;
        z-index: 9;
     }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }

    .brand_logo {
        display: inline-block;
        max-width: 200px;
    }

    ul {
        display: flex;
        gap: 10px;
        list-style: none;
        margin: 0;
        padding: 0;

        a {
            padding: 10px;
            text-decoration: none;
            color: black;
            font-weight: 400;

            &:hover {
                font-weight: bold;
            }
        }
    }

    .active {
        font-weight: bold;
    }

</style>