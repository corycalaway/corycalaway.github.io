
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


    
    // const nodemailer = require('nodemailer')
    
    // async function emailSend () {
    // let transporter = nodemailer.createTransport({
    //       host: "smtp.ethereal.email",
    //       port: 587,
    //       secure: false, // true for 465, false for other ports
    //       auth: {
    //         user: process.env.EMAIL, // generated ethereal user
    //         pass: process.env.PASSWORD, // generated ethereal password
    //       },
    //     });
    
    //     let info = await transporter.sendMail({
    //         from: 'cory.c.calaway@gmail.com', // sender address
    //         to: "dane65@ethereal.email", // list of receivers
    //         subject: "Hello ✔", // Subject line
    //         text: "Hello world?", // plain text body
    //         html: "<b>Hello world?</b>", // html body
    //       });
    
    //     transporter.sendMail(info, function(err, data) {
    //         if(err) {
    //             console.log('err')
    //         } else {
    //             console.log('yay')
    //         }
    //     })
    // }
    
     
    

    // // emailSend()



    const PORT = process.env.PORT || 3002
    app.listen(PORT, () => console.info(`server has started on ${PORT}`))

