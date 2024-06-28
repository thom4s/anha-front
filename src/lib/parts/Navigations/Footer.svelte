<script>
    import { menusStore } from "$lib/config/website";
    import SocialLinks from "$lib/parts/Navigations/SocialLinks.svelte";
    import Menu from "$lib/parts/Elements/Menu.svelte";

    $: ( {menuItemsPrimary, menuItemsFooter} = $menusStore)

</script>
<footer>
    <div class="container">

        <div class="nav_group fl-justify gap-l mb-small">
            <Menu menuItems={menuItemsPrimary} />
            <Menu menuItems={menuItemsFooter} />
        </div>

        <div class="nav_group fl-justify gap-l">
            <SocialLinks />
        </div>
            
    </div>
</footer>



<style lang="scss">
    footer {
        margin-top: 10px;
        margin-bottom: 60px;
    }
    .container {
        border-top: 1px solid;
        padding-top: $space-s
    }
    nav {
        padding: 15px 0;
    }
    .nav_group {
        @include max(bigtablet) {
            flex-direction: column;
            gap: $space-s;
        }
    }
</style>