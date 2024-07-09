<script lang="ts">
    import Form from "$lib/parts/Forms/Form.svelte";
    
    export let page = {};

</script>


<div class="container">

    <div class="grid">
        
        <div class="m_3column">
            <!-- <h1 class="h1">{page.title}</h1> -->
            <div>{@html page.content}</div>
        </div>

        <div class="m_9column">
            <Form />
        </div>
    </div>

</div>


<style lang="scss">
    .container {
        padding: 60px 0;

        .h1 {
            margin-top: 0;
        }
    }
</style>