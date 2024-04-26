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
        pathname = pathname.replace('fr/', '');
        pathname = pathname.replace('en/', '');
    
        $lang = lg;
        const pageTranslated = await getTranslation(pathname, lg )
        console.log( 'pageTranslated: ', pageTranslated?.translation )

        if( pageTranslated === null || pageTranslated?.translation === null || pageTranslated?.translation?.uri == '/') {
            goto( '/fr' + lg, { invalidateAll: true} )
        }
        else {
            if (pageTranslated.translation.uri !== null) {
                goto( pageTranslated.translation.uri, { invalidateAll: true } )
            }
        }

    }
</script>

{#each langs as l}
    <li><button disabled={l.slug === $lang} on:click={ () => switchLang(l.slug)}>{l.name}</button></li>
{/each}