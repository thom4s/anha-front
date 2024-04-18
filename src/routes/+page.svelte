
<script lang="ts">

    export let data: {
        homepage: Promise<void>;
    }
    $: ({homepage} = data)
    $: console.log('homepage: ', homepage)

</script>

<div class="container">
    <h1>{homepage.title}</h1>
    <div>{@html homepage.content}</div>
</div>