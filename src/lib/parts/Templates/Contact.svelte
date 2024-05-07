<script lang="ts">
    import Form from "$lib/parts/Forms/Form.svelte";
    
    export let page = {};

</script>


<div class="container">

    <div class="grid">
        
        <div class="m_4column">
            <h1>{page.title}</h1>
            <div>{@html page.content}</div>
        </div>

        <div class="m_8column">
            <Form />
        </div>
    </div>

</div>


