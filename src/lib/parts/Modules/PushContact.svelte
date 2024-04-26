<script>
    export let titre = '';
    export let text = '';
    export let labelDuBouton = '';

    $: console.log(titre)
</script>

<section class="module">
    <h2>{titre}</h2>

    <div>{text}</div>

    <a href="/contact">{labelDuBouton}</a>
</section>

<style lang="scss">
    .module {
        margin: 40px 0;
    }
    .logos {
        display: flex;
        gap: 20px;

        img { 
            object-fit: contain;
        }
    }
</style>