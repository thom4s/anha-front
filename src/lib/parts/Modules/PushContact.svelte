<script>
    import { onMount } from "svelte";
    import { getPushContactContents } from '$lib/queries/options.js';
    import { fade } from 'svelte/transition';

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

        <div class="s_12column m_6column">

            {#if title }
                <h2 class="mod_title h1 mb-medium" transition:fade={{ duration: 200 }}>{@html title}</h2>
            {/if}

            {#if !smallContact }
                <div class="mod_content body" transition:fade={{ duration: 200 }}>{@html text}</div>
            {/if}
        
        </div>

        <div class="s_12column m_6column">
            {#if smallContact }
                <div class="body" transition:fade={{ duration: 200 }}>{@html text}</div>
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
        @include min(tablet) {
            margin-bottom: 180px;
        }
        @include max(tablet) {
            margin-bottom: $space-m;
        }
        .mod_title {
            @include max(tablet) {
                margin-bottom: 0
            } 
        }
    }
    div.body {
        margin-bottom: 30px;
    }
</style>