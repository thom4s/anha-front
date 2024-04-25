<script lang="ts">

    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'
    import Form from '$lib/parts/Forms/Form.svelte';

    import BlockPost from "$lib/parts/BlockPost.svelte";

    export let data: {
        page: Promise<void>;
    }
    $: ({page, offres} = data)

</script>




<div class="container">

    <h1>{page.title}</h1>
    <div>{@html page.content}</div>

    <div class="grid">
        <div class="s_6column">
            {#each offres.nodes as post }
                <BlockPost {post} type="offres"/>
            {/each}
        </div>
    
        <div class="s_6column">

            <h2>Postuler</h2>

            <Form />

        </div>
    </div>  
</div>