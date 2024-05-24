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

    export let smallContact = true;

</script>

<section class="module">

    <div class="grid container">

        <div class="m_6column">
            <h2 class="h1 no-margin">{@html title}</h2>


            {#if !smallContact }
                <div class="body">{@html text}</div>
                <a class="btn dark" href="{lien?.url}">{label}</a>
            {/if}
        
        </div>

        <div class="m_6column">
            {#if smallContact }
                <div class="body">{@html text}</div>
                <a class="btn dark" href="{lien?.url}">{label}</a>
    
            {:else}
                <Form />

            {/if}
        
        </div>
    </div>



</section>

<style lang="scss">
    .module {
        margin-top: 180px;
        margin-bottom: 30px;
    }
    div.body {
        margin-bottom: 30px;
    }
</style>