<script>
    import { activeLang } from "$lib/config/website";
    import LangSwitcher from "$lib/parts/LangSwitcher.svelte";
    import { page } from '$app/stores';
	import logo from '$lib/assets/logo_anha_nb.png';
	import logo_nobaseline from '$lib/assets/logo_anha_nobaseline.png';
    import { onMount } from "svelte";

    export let menuItemsPrimary = []
    export let menuItemsSecondary = []
    export let langs = []
    
    $: console.log( 'pathname', $page.url.pathname)
    $: pathname = $page.url.pathname + '/';


  // VARIABLES

  onMount(() => {


    const masthead = document.getElementById('masthead');


        let didScroll;
        let lastScrollTop = 0;
        let delta = 20;

        const documentIsScrolling = function () {
            didScroll = true;

            // Handle menu
            setInterval(function() {
                if (didScroll) {
                    handleScrollForMenu();
                    didScroll = false;
                }
            }, 250);

        }

        const handleScrollForMenu = function () {
            var st = window.scrollY;

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            if( st < 150 ) {
                //console.log('documentIsScrolling BACKTOTHETOP');
                masthead.classList.remove('out');
            }
            else if (st > lastScrollTop ){
                //console.log('documentIsScrolling DOWN');
                masthead.classList.add('out');
            } 
            else {
                //console.log('documentIsScrolling UP');
                masthead.classList.remove('out');
            }

            lastScrollTop = st;
        }

        document.addEventListener("scroll", documentIsScrolling, false);

    });

</script>

<header id="masthead">
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
        transition: transform .2s;


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