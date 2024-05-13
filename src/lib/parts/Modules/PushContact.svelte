<script>
    import { onMount } from "svelte";
    import { getPushContactContents } from '$lib/queries/options.js';

    import Form from "$lib/parts/Forms/Form.svelte";

    let contents, title, label, text, lien;

    onMount( async () => {
        contents = await getPushContactContents();
        title = contents.titre
        label = contents.label
        text = contents.text
        lien = contents.lien
    })

    export let smallContact = false;

</script>

<section class="module">

    <div class="grid">

        <div class="m_6column">
            <h2>{@html title}</h2>


            {#if smallContact }

            {:else}
                <div>{@html text}</div>
                <a href="{lien?.url}">{label}</a>
            {/if}
        
        </div>

        <div class="m_6column">
            {#if smallContact }
                <div>{@html text}</div>
                <a href="{lien?.url}">{label}</a>
    
            {:else}
                <Form />

            {/if}
        
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