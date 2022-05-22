import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "aed590e0e7204e",
        pass: "22c1684ad4994d"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Davi Matos <davi@feedget.com>',
            subject: subject,
            html: body
        })

    }
}