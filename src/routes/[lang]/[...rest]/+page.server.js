import { getPageBySlug } from "$lib/queries/pages"
import { getAllProjets} from "$lib/queries/projets"
import { getAllTerms } from "$lib/queries/taxonomies"
import { getAllPosts } from "$lib/queries/posts"




export async function load( {params} ) {
    
    let page, projets, posts, secteurs, savoirfaires;

    page = await getPageBySlug(params.rest)

    if( page.template.templateName === 'Projets') {
      projets = await getAllProjets(params.lang);
      secteurs = await getAllTerms('secteurs');
      savoirfaires = await getAllTerms('savoirfaires');
    }

    if( page.template.templateName === 'Actualités') {
      posts = await getAllPosts(params.lang);
      secteurs = await getAllTerms('secteurs');
      savoirfaires = await getAllTerms('savoirfaires');
    }

    if( page.template.templateName === 'Modèle Savoir Faire') {
      page = await getPageBySlug(params.rest, true)
    }

    return {
        page,
        posts,
        projets,
        secteurs,
        savoirfaires
    }

}


/* 
 * CONTACT FORM PARAMS & ACTIONS 
 **/

import nodemailer from 'nodemailer';
import { getFormsParams } from '$lib/queries/options.js';

const formsParams = await getFormsParams();

export const actions = {

	contact: async ({request}) => {
		
        let { name, mail, message } = Object.fromEntries(await request.formData());
        const emailHtml = `<html><p>Hello ${name} - ${mail}</p><p>${message}</html>`;

        const smtpParams = {
          host: formsParams.smtp.host,
          port: parseInt(formsParams.smtp.port),
          secure: true,
          auth: {
            user: formsParams.smtp.authUser,
            pass: formsParams.smtp.authPass
          }
        }

        const options = {
          from: 'hello@thomasflorentin.net',
          to: 'hello@thomasflorentin.net',
          subject: 'hello world',
          text: "Plaintext version of the message",
          html: emailHtml
        };

        const transporter = nodemailer.createTransport(smtpParams);

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
