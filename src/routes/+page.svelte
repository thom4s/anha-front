
<script lang="ts">

    export let data: {
        homepage: Promise<void>;
    }
    $: ({homepage} = data)
    $: console.log('homepage: ', homepage)

</script>


    <h1>{homepage.node.title}</h1>
    <div>{@html homepage.node.content}</div>
