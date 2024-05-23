<script>
    import SocialLinks from "$lib/parts/Navigations/SocialLinks.svelte";

    export let menuItemsPrimary = []
    export let menuItemsSecondary = []
    export let menuItemsFooter = []
</script>
<footer>
    <div class="container">

        <div class="fl-justify gap-l">
            <nav>
                <ul>
                    {#each menuItemsPrimary.nodes as item}
                        <li><a href="{item.path}" class="menu">{item.label}</a></li>
                    {/each}
                    {#each menuItemsSecondary.nodes as item}
                        <li><a href="{item.path}" class="menu">{item.label}</a></li>
                    {/each}
                </ul>
            </nav>
    
            <nav>
                <ul>
                    {#each menuItemsFooter.nodes as item}
                        <li><a href="{item.path}" class="menu">{item.label}</a></li>
                    {/each}
                </ul>
            </nav>
        </div>

        <SocialLinks />
            
    </div>
</footer>



<style>
    footer {
        margin-top: 10px;
        margin-bottom: 60px;
    }
    .container {
        border-top: 1px solid;
    }
    nav {
        padding: 15px 0;
    }
    ul {
        display: flex;
        gap: 15px;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .menu {
        padding: 15px 0;
    }
</style>