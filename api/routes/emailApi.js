var express = require('express');
var router = express.Router();
 const nodemailer = require('nodemailer')
require('dotenv').config();

router.post("/", ({body}, res, next) => {
    

 console.log(body.name)
  async function emailSend() {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: body.email, // sender address
        to: "dane65@ethereal.email", // list of receivers
        subject: body.name, // Subject line
        text: body.message, // plain text body
        // html: "<b>Hello world?</b>", // html body
    });

    transporter.sendMail(info, function (err, data) {
        if (err) {
            console.log('err')
        } else {
            console.log('yay')
        }
    })
}
emailSend()
    // Transaction.insertMany(body)
    //   .then(dbTransaction => {
    //     res.json(dbTransaction);
    //   })
    //   .catch(err => {
    //     res.status(404).json(err);
    //   });

    
res.json(body)
  });

module.exports = router;
// const sending = () => { 
//     console.log('pass')
// }

// module.exports = sending





