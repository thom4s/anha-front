<script>
    import { lang } from "$lib/config/website";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { getTranslation } from "$lib/queries/pages";

    export let langs = []

    $: console.log('lang: ', $lang)
    $: console.log('page: ', $page)

    const switchLang = async ( lg ) => {
        let pathname = $page.url.pathname
        $lang = lg;
        const pageTranslated = await getTranslation(pathname, lg )
        goto( pageTranslated.translation.uri, { invalidateAll: true} )
    }
</script>

{#each langs as l}
    <li><button disabled={l.slug === $lang} on:click={ () => switchLang(l.slug)}>{l.name}</button></li>
{/each}