/* eslint-disable @typescript-eslint/quotes */
import nodemailer from 'nodemailer';
import express from 'express';

const router = express.Router();
require('dotenv').config();

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: `${process.env.USERNAME}`,
    pass: `${process.env.PASS}`,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.get('/', (req, res) => {
  res.json({
    message: 'This route is for sending emails 😀. Use POST.',
  });
});

router.post('/', (req, res) => {
  let email = req.body.email;
  let message = req.body.message;
  let content = `from: ${email} \n\n message: ${message} `;

  let mail = {
    to: process.env.TO,  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        msg: err,
      });
    } else {
      res.json({
        msg: 'success',
      });
    }
  });
});

export default router;
