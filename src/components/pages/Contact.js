

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


require('dotenv').config();
// const sendEmail = require("../../../server.js")



function Contact() {

  let mail;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  const [state, setState] = useState({ apiResponse: "" });

  // create reusable transporter object using the default SMTP transport



  // const sendMail = (mail) => {
  //   //1.
  //   fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
  //     method: "post", //2.
  //     body: mail, //3.

  //   }).then((response) => {
  //     return response.json();
  //   });
  // };

  function handleChange(e) {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {

        setErrorMessage('Your email is invalid.');
      } else {

        setErrorMessage('');
      }
      // isValid conditional statement
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    // setFormState({ ...formState, name: e.target.value })
    // setFormState({ ...formState, [e.target.name]: e.target.value })

    console.log('errorMessage', errorMessage);

    if (!errorMessage) {

      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

  }

  // async function emailSend () {
  //   let transporter = nodemailer.createTransport({
  //         host: "smtp.ethereal.email",
  //         port: 587,
  //         secure: false, // true for 465, false for other ports
  //         auth: {
  //           user: process.env.EMAIL, // generated ethereal user
  //           pass: process.env.PASSWORD, // generated ethereal password
  //         },
  //       });

  //       let info = await transporter.sendMail({
  //           from: 'cory.c.calaway@gmail.com', // sender address
  //           to: "dane65@ethereal.email", // list of receivers
  //           subject: "Hello ✔", // Subject line
  //           text: "Hello world?", // plain text body
  //           html: "<b>Hello world?</b>", // html body
  //         });

  //       transporter.sendMail(info, function(err, data) {
  //           if(err) {
  //               console.log('err')
  //           } else {
  //               console.log('yay')
  //           }
  //       })
  //   }
  async function callAPI(mail) {
    console.log(mail)
    fetch("http://localhost:9000/emailApi", {
      method: "POST",
      body: JSON.stringify(mail),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())        
    .then(text => console.log(text))}
    //  .then(response => {
    //   console.log(response)
    //   return response.json();
    // })
   
      // .then(res => { console.log(res.body)
      //   res.text()})
      // .then(res => {
      //   console.log(res)
      //   setState({ apiResponse: res })})
      // .catch(err => err);
    

  async function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        //clear submit form data
        e.target.email.value = ''
        e.target.name.value = ''
        e.target.message.value = ''
        mail = formState;






        // callAPI(mail)
        // console.log(emailSend())
        //  emailSend()
        //  sendEmail()




        // emailSend()
        //  let transporter = nodemailer.createTransport({
        //   host: "smtp.ethereal.email",
        //   port: 587,
        //   secure: false, // true for 465, false for other ports
        //   auth: {
        //     user: process.env.EMAIL, // generated ethereal user
        //     pass: process.env.PASSWORD, // generated ethereal password
        //   },
        // });

        // let info = await transporter.sendMail({
        //     from: 'cory.c.calaway@gmail.com', // sender address
        //     to: "dane65@ethereal.email", // list of receivers
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<b>Hello world?</b>", // html body
        //   });

        // transporter.sendMail(info, function(err, data) {
        //     if(err) {
        //         console.log('err')
        //     } else {
        //         console.log('yay')
        //     }
        // })

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

      }

  return (
      <section className="container">
        <h1 data-testid="Contact me" >Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="boxsmwidth" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <br />
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} onChange={handleChange} className="boxsmwidth" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} className="boxwidth" />
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  }

  export default Contact;
