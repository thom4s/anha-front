<script>
    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';

    import Input from '$lib/parts/Forms/Input.svelte';
    import Textarea from '$lib/parts/Forms/Textarea.svelte';
	import Checkbox from '$lib/parts/Forms/Checkbox.svelte';

    let loading = false; 
</script>

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

    <div class="group">
        <Input type="text" placeholder="Thomas" name="firstname" />
        <Input type="text" placeholder="Florentin" name="lastname" />
    </div>

    <div class="group">
        <Input type="text" placeholder="Place de la république..." name="adresse" />
    </div>

    <div class="group">
        <Input type="text" placeholder="77..." name="code postal" />
        <Input type="text" placeholder="Place de la république..." name="Ville" />
    </div>

    <div class="group">
        <Input type="text" placeholder="06...." name="telephone" />
        <Input type="email" placeholder="nom@domaine.fr" name="mail" />
    </div>

    <div class="group">
        <Textarea name="message" />
    </div>

    <div class="group">
        <Checkbox label="J’accepte que mes données soient récupérées pour le traitement de ma demande." name="acceptance" />
    </div>

    <Input type="submit" value="Envoyer" />
</form>

<style lang="scss">
    form {
        transition: all .2s;
    }
    .loading {
        opacity: .5;
    }
    .group {
        display: flex;
        justify-content: space-between;
        gap: 40px;

        & > * {
            width: 50%;
        }
    }
</style>