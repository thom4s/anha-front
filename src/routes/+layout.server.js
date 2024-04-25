import { API_URL } from '$env/static/private';
import { lang } from '$lib/config/website';
import { getSeoSchema } from '$lib/queries/seo';
import { getMenuItems } from '$lib/queries/options';


export async function load( { params }) {


    return {
        seoConfig: await getSeoSchema(),
        menuItems: await getMenuItems(params.lang, 'primary_menu'),
        menuItemsSecondary: await getMenuItems(params.lang, 'footer_menu')
    }
}