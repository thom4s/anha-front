
import { API_URL } from '$env/static/private';

export async function getMenuItems( lang, id ) {
    const menuItems = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                {
                    menuItems(where: {language: ${lang.toUpperCase()}, location: ${id.toUpperCase()} }) {
                        nodes {
                            label
                            path
                        }
                    }
                }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            console.log('res: ', res)
            return res.data.menuItems
        });
        
    return menuItems;
}

export async function getFormsParams( ) {
    
    const options = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                optionsDuSite {
                    formulaireDeContact {
                        smtp {
                            authPass
                            authUser
                            host
                            port
                            secure
                        }
                    }
                }
            }
            `
            }),
        })
        .then(res => res.json())
        .then(res => {
            return res.data.optionsDuSite.formulaireDeContact
        });

    return options;
}

