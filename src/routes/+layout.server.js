import { getSeoSchema } from '$lib/queries/seo';
import { getMenuItems, getLangs } from '$lib/queries/options';


export async function load( { params, locals } ) {

    return {
        seoConfig: await getSeoSchema(),
        langs: await getLangs(),
        currentLang: params.lang,
        menuItemsPrimary: await getMenuItems(params.lang, 'primary_menu'),
        menuItemsSecondary: await getMenuItems(params.lang, 'secondary_menu'),
        menuItemsFooter: await getMenuItems(params.lang, 'footer_menu')
    }
}