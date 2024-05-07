<script>
	import Form from "$lib/parts/Forms/Form.svelte";

    export let titre = 'Parlons-nous';
    export let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies hendrerit enim ut fermentum.';
    export let labelDuBouton = '';
</script>

<section class="module">

    <div class="grid">

        <div class="m_6column">
            <h2>{titre}</h2>

            <div>{text}</div>
        
            <a href="/contact">{labelDuBouton}</a>
        </div>

        <div class="m_6column">
            <Form />

        </div>
    </div>



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