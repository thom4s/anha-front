
import nodemailer from 'nodemailer';
import Contact from '$lib/emails/Contact.svelte';
import { getContactPage } from "$lib/queries/pages"


const page = await getContactPage();

export async function load( {params} ) {
    return {
      page
    }
}

export const actions = {
	contact: async ({request}) => {
		
        let { name, mail, message } = Object.fromEntries(await request.formData());

        const emailHtml = `<html><p>Hello ${name} - ${mail}</p><p>${message}</html>`;

        const transporter = nodemailer.createTransport({
          host: page.parametresFormulaire.smtp.host,
          port: page.parametresFormulaire.smtp.port,
          secure: true,
          auth: {
            user: page.parametresFormulaire.smtp.authUser,
            pass: page.parametresFormulaire.smtp.authPass
          }
        });

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
