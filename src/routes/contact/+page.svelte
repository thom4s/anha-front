<script>
    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';
    
    let loading = false;
</script>


<div class="container">
    <h1>Contact</h1>


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

        <input type="text" placeholder="THomas" name="name">
        <input type="email" placeholder="nom@domaine.fr" name="mail">
        <textarea name="message"></textarea>
        <input type="submit" value="Envoyer">
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
