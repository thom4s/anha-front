/**
 * Decorate SEO title.
 * @param {string} title
 */
export default function (title) {
	return `${title} – Anha`;
}

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


/** Dispatch event on click outside of node */
export function clickOutside(node) {
  
	const handleClick = event => {
	  if (node && !node.contains(event.target) && !event.defaultPrevented) {
		node.dispatchEvent(
		  new CustomEvent('click_outside', node)
		)
	  }
	}
  
	  document.addEventListener('click', handleClick, true);
	
	return {
	  destroy() {
		document.removeEventListener('click', handleClick, true);
	  }
	}
}


import nodemailer from 'nodemailer';
import { getFormsParams } from '$lib/queries/options.js';
import { error } from '@sveltejs/kit';
  
const formsParams = await getFormsParams();

export async function formProcess ( request ) {

	let { firstname, lastname, adresse, codepostal, ville, telephone, mail, message } = 
  
  Object.fromEntries(await request.formData());

      if( !validateEmail(mail) ) {
        throw new Error('email is not ok');
      }

      const smtpParams = {
        host: formsParams.smtp.host,
        port: parseInt(formsParams.smtp.port),
        secure: true,
        auth: {
          user: formsParams.smtp.authUser,
          pass: formsParams.smtp.authPass
        }
      }

      const emailHtml = `<html>
        <p>Bonjour</p>
        <p>Vous avez reçu un nouveau messsage envoyé à partir du formulaire de contact du site internet.</p>
        <p> ${firstname} ${lastname} - ${mail} - ${telephone}</p>
        <p> ${adresse}, ${codepostal} ${ville}</p>
        <p>${message}</p>
        <p>Bonne journée. <br>Anha.fr</p>
      </html>`;

      const emailHtmlSender = `<html><p>Bonjour ${firstname} ${lastname}</p>
        <p>Nous avons bien reçu votre message. Nous y répondrons dans les plus brefs délais.</p>
        <p> Voici vos informations :</p>
        <p> ${firstname} ${lastname} - ${mail} - ${telephone}</p>
        <p> ${adresse}, ${codepostal} ${ville}</p>
        <p>Voici votre message : <br> ${message}</p>
        <p>Bonne journée. <br>Anha.fr</p>
      </html>`;

      const options = {
        from: 'info@cms.anha.fr',
        to: 'info@cms.anha.fr',
        subject: 'Vous avez un nouveau message du site internet',
        text: emailHtml,
        html: emailHtml
      };

      const optionsSender = {
          from: 'info@cms.anha.fr',
          to: mail,
          subject: 'Merci pour votre message',
          text: emailHtmlSender,
          html: emailHtmlSender
        };

    

    try {

        const transporter = nodemailer.createTransport(smtpParams);

        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log("Server is ready to take our messages");
          }
        });

      transporter.sendMail(options);
      transporter.sendMail(optionsSender);

    } catch (err) {
      console.error("Error while sending mail", err);
    }

    return true;

}