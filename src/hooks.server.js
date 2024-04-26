function redirect(location, body) {
    return new Response(body, {
        status: 303,
        headers: { location }
    });
}

export const handle = async ({ event, resolve }) => {

	console.log(`📣 NEW REQUEST IS BEING MADE FROM ${event.url.pathname}`)
	console.log('hooks.server.ts')

	if ( event.url.pathname == '')
		return redirect('/fr', '');

	console.log(`🔥 THE PAGE IS READY, I'M SENDING THE RESPONSE`)

    return resolve(event);
};
