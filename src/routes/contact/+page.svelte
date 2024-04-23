<script lang="ts">
    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';
    import Input from '$lib/parts/Forms/Input.svelte';
    import Textarea from '$lib/parts/Forms/Textarea.svelte';

    export let data: {
        page: Promise<void>;
    }
    $: ({page} = data)
    let loading = false;
    $: console.log(page)
</script>


<div class="container">
    <h1>{page.title}</h1>

    <div>{@html page.content}</div>

    <form 
        method="POST"
        action="?/contact"
        class:loading={loading}
        use:enhance={() => {
            loading = true;

            return async ({ result, update }) => {
                if (result.type === 'redirect') {
                    goto(result.location);
                } else {
                    await applyAction(result);
                }
                loading = false;
            };
        }}>

        <Input type="text" placeholder="Thomas" name="name" />
        <Input type="email" placeholder="nom@domaine.fr" name="mail" />
        <Textarea name="message" />
        <Input type="submit" value="Envoyer" />
    </form>

</div>

<style>
    form {
        transition: all .2s;
    }
    .loading {
        opacity: .5;
    }
</style>
