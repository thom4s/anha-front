<script>
    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';

    import Input from '$lib/parts/Forms/Input.svelte';
    import Textarea from '$lib/parts/Forms/Textarea.svelte';
	import Checkbox from '$lib/parts/Forms/Checkbox.svelte';

    let loading = false; 
    let error = false; 
    let success = false; 
    let msg = false; 

    let firstname = '';

    $: {
        if(firstname === '' ) {

        }
    }
</script>

<form 
    method="POST"
    action="?/contact"
    class:loading={loading}
    use:enhance={() => {

        loading = true;

        return async ({ result, update }) => {

            console.log('result', result)

            if (result.type === 'error') {
                error = true;
                msg = "Il y a un problème avec l'envoi du mail. <br>Vérifiez les informations du formulaires : format de l'adresse mail, etc."

            } else {
                await applyAction(result);
                msg = "Merci pour votre message ! "
                error = false;
                success = true;
                update({ reset: true });
            }

            loading = false;
        };
    }}>

        <Input type="text" placeholder="Nom" name="firstname" size="half" value="{firstname}" required={true} />
        <Input type="text" placeholder="Prénom" name="lastname" size="half" required={true} />

        <Input type="text" placeholder="Adresse" name="adresse" size="full" required={false}/>

        <Input type="text" placeholder="Code postal" name="codepostal" size="half" required={false}/>
        <Input type="text" placeholder="Ville" name="ville" size="half" required={true}/>

        <Input type="text" placeholder="Téléphone" name="telephone" size="half" required={true}/>
        <Input type="email" placeholder="e-mail" name="mail" size="half" required={true}/>

        <Textarea name="message" placeholder="Votre message" size="full" required={true}/>

        <Checkbox label="J’accepte que mes données soient récupérées pour le traitement de ma demande." name="acceptance" />

        <Input type="submit" value="Envoyer" />
 
</form>


	{#if error}
		<p class="error">{@html msg}</p>
	{/if}
	{#if success}
		<p class="success">{@html msg}</p>
	{/if}


<style lang="scss">
    form {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        gap: $space-m;
        transition: all .2s;
    }

    // :global(input[type="submit"]) {
    //     width: unset !important;
    // }
    .error {
        color: red;
        padding: 10px 0;
        font-weight: 500;
    }
    .success {
        color: blue;
        padding: 10px 0;
        font-weight: 500; 
    }
    .loading {
        opacity: .5;
    }
</style>