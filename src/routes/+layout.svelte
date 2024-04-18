<script>
    import Header from "$lib/parts/Header.svelte";
    import Footer from "$lib/parts/Footer.svelte";
    import '$lib/scss/style.scss';

    export let data;
    $: ({menuItems, menuItemsSecondary} = data)
</script>


<Header {menuItems} {menuItemsSecondary}/>

<main>
    <slot />
</main>


<Footer />