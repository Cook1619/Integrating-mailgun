import { Router } from 'express';
import { sendEmail } from '../utils/mail';

let router = Router();

router.post('/', (req, res, next) => {
    let messageBody = `Name: ${req.body.name}
                       Email: ${req.body.email}
                       Message: ${req.body.message}`;
    sendEmail('cook6348@gmail.com', 'no-reply@covalence.io', 'New Contact Form Submission', messageBody)
    .then((response) => {
        console.log(response);
        res.sendStatus(201);
    }).catch((err) => {
        next(err);
    })
})

export default router;