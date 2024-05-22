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
                masthead.classList.add('at-top');
            }
            else if (st > lastScrollTop ){
                //console.log('documentIsScrolling DOWN');
                masthead.classList.add('out');
                masthead.classList.remove('at-top');
            } 
            else {
                //console.log('documentIsScrolling UP');
                masthead.classList.remove('out');
                masthead.classList.remove('at-top');
            }

            lastScrollTop = st;
        }

        document.addEventListener("scroll", documentIsScrolling, false);

    });

</script>

<header id="masthead" class="at-top" class:home={$page.url.pathname === '/fr' || $page.url.pathname === '/en'}>
    <div class="container">
        <nav class="left">
            <ul>
                {#each menuItemsPrimary.nodes as item}
                    <li>
                        <a href="{item.path}" class="menu" class:active={pathname == item.path}>{item.label}</a>
                    </li>
                {/each}
            </ul>
        </nav>

        {#if $page.url.pathname === '/fr' || $page.url.pathname === '/en' }
            <h1 class="logo_container no-margin">
                <a href="/{$activeLang}" class="brand_logo">
                    <img src="{logo}" alt="logo" />
                </a>
            </h1>
        {:else}
            <a href="/{$activeLang}" class="brand_logo">
                <img src="{logo}" alt="logo"/>
            </a>
        {/if}
        <nav class="right">
            <ul>
                {#each menuItemsSecondary.nodes as item}
                    <li>
                        <a href="{item.path}" class="menu" class:active={pathname == item.path}>{item.label}</a>
                    </li>
                {/each}

                <LangSwitcher {langs} />
            </ul>
        </nav>

    </div>
</header>



<style lang="scss">

    header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        transform: translateY(0);
        background-color: $light-bg;
        z-index: 9;
        transition: transform .2s;
        &.home.at-top {
            .container {
                align-items: flex-start;
                // padding-bottom: 150px;
            }
            .logo_container {
                margin-top: 50px;
                // transform: translateY(100%);
                .brand_logo {
                    max-width: 420px;
                    padding: 60px 0;
                }
            }
        }
    }
    
    nav {
        width: 40%;
        padding: 35.5px 0;
        &.right ul {
            justify-content: flex-end;
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        transition: 0.5s ease-in-out;
    }

    .logo_container {
        transition: 0.5s ease-in-out;
        line-height: 0;
    }

    .brand_logo {
        transition: 0.5s ease-in-out;
        display: inline-block;
        max-width: 150px;
        padding: 15px 0;
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

    .active {
        font-weight: bold;
    }



</style>