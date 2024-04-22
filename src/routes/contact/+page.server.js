
import nodemailer from 'nodemailer';
import Contact from '$lib/emails/Contact.svelte';

const transporter = nodemailer.createTransport({
	host: 'mail.gandi.net',
	port: 465,
	secure: true,
	auth: {
		user: 'hello@thomasflorentin.net',
		pass: 'dostoievski!tolstoi!gandi'
	}
});


export async function load( {params} ) {

    console.log('params, ', params)
    
    return {
        
    }
}


export const actions = {
	contact: async ({request, locals}) => {
		
        let { name, mail, message } = Object.fromEntries(await request.formData());

        const emailHtml = `<html><p>Hello ${name} - ${mail}</p><p>${message}</html>`;

        const options = {
            from: 'hello@thomasflorentin.net',
            to: 'hello@thomasflorentin.net',
            subject: 'hello world',
            text: "Plaintext version of the message",
            html: emailHtml
        };

        transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Server is ready to take our messages");
            }
          });

        transporter.sendMail(options);

        return true;

	},
};
