<script>
    import Header from "$lib/parts/Header.svelte";
    import Footer from "$lib/parts/Footer.svelte";
    import '$lib/scss/style.scss';

    export let data;
    $: ({menuItems} = data)
</script>


<Header {menuItems} />

<main>
    <slot />
</main>


<Footer />