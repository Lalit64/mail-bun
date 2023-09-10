import nodemailer from 'nodemailer';
import { Elysia, t } from 'elysia';
import { log } from '../app';

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: `${Bun.env.USERNAME}`,
    pass: `${Bun.env.PASS}`,
  },
};

const transporter = nodemailer.createTransport(transport);

type Email = {
  email: string;
  message: string;
};

const email = (body: Email) => {
  let email = body?.email;
  let message = body?.message;
  let content = `from: ${email} \n\n message: ${message} `;

  let mail = {
    to: Bun.env.TO, //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      return {
        msg: 'fail',
      };
    } else {
      return {
        msg: 'success',
      };
    }
  });
};

const send = (app: Elysia) => {
  transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready to send emails 📧.');
    }
  });

  app.get('/api/send', (ctx) => {
    log(ctx);

    return {
      message: 'This route is for sending emails 😀. Use POST.',
    };
  });

  app.post(
    '/api/send',
    (ctx: any) => {
      email(ctx.body);
      log(ctx);

      return {
        msg: 'success',
      };
    },
    {
      body: t.Object({
        email: t.String(),
        message: t.String(),
      }),
    },
  );
};

export default send;
