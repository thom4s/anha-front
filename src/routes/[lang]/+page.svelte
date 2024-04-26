
<script lang="ts">
    import SEO from '$lib/parts/SEO/index.svelte';
    import { website } from '$lib/config/website.js'

    export let data: {
        homepage: Promise<void>;
    }
    $: ({page} = data)

</script>


<div class="container">
    <h1>{page.title}</h1>
    <div>{@html page.content}</div>
</div>

