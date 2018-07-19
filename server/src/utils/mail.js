import mailgunLoader from 'mailgun-js';
import { config } from '../config';
let mailgun = mailgunLoader({ apiKey: config.MAILGUN_API_KEY, domain:'sandbox8fc8d1f3693f480db0b840a52d8110ff.mailgun.org'});

function sendEmail(to, from, subject, content){
    let data = {
        from,
        to,
        subject,
        html: content
    };

    return mailgun.messages().send(data);
}

export { sendEmail }