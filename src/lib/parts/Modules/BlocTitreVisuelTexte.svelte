<script>
	import { onMount } from "svelte";

    export const titre = '';
    export let visuel = '';
    export let texte = '';

    // PARALLAX
    import Ukiyo from "ukiyojs";

    onMount(() => {
        new Ukiyo(".parallax", {
            scale: 1.15,
            speed: 1.2,
        })
    })

</script>

<div class="module fl-column gap-m snap">

    <h2 class="h2 no-margin txt-center">{titre}</h2>

    <div class="">
        <img class="parallax" src="{visuel?.node?.sourceUrl}">
    </div>

    <div class="body">
        {@html texte}
    </div>

</div>


<style lang="scss">
    .module {
        height: 100vh;
        justify-content: center;
    }
    h2 {
        align-self: center;
        text-align: center;
    }
    img {
        aspect-ratio: 5/4;
    }
</style>