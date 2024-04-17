import { API_URL } from '$env/static/private';

export async function load() {

    return {
        menuItems: await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                    {
                        menu(id: "primary_menu", idType: LOCATION) {
                        id
                            menuItems {
                                nodes {
                                    label
                                    url
                                    path
                                }
                            }
                        }
                    }
                `
                }),
            })
            .then(res => res.json())
            .then(res => {
                return res.data.menu.menuItems
            }),

    }
}