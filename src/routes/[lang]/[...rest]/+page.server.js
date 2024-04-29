import { getPageBySlug } from "$lib/queries/pages"
import { getAllProjets} from "$lib/queries/projets"
import { getAllTerms } from "$lib/queries/taxonomies"

export async function load( {params} ) {
    
    let projets, secteurs, savoirfaires;

    const page = await getPageBySlug(params.rest, params.lang)

    if( page.template.templateName === 'Page Projets') {
        projets = await getAllProjets(params.lang);
        secteurs = await getAllTerms('secteurs');
        savoirfaires = await getAllTerms('savoirfaires');
    }

    return {
        page,
        projets,
        secteurs,
        savoirfaires
    }

}

