<script>
    import Header from "$lib/parts/Header.svelte";
    import Footer from "$lib/parts/Footer.svelte";
    import '$lib/scss/style.scss';

</script>


<Header />

<main>
    <slot />
</main>


<Footer />