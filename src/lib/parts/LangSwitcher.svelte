<script>
    import { lang } from "$lib/config/website";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    export let langs = []

    $: console.log('lang: ', $lang)
    $: console.log('page: ', $page)

    const switchLang = ( lg ) => {
        let url = $page.url.href
        url = url.replace($lang, lg);
        $lang = lg;

        goto(url, { invalidateAll: true})
    }
</script>

{#each langs as lang}
    <li><button on:click={ () => switchLang(lang.slug)}>{lang.name}</button></li>
{/each}