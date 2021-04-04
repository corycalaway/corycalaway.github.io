import React, { useState } from "react"

import { validateEmail } from '../../utils/helpers';
// import Styled from "styled-components"

// const Container = Styled.div`
//   width: 100%;
//   padding: 20px;
//   margin: auto;
//   input, textarea{
//     width: 100%;
//     margin-bottom: 20px;
//     border: 1px solid #bbb;
//     padding: 0 10px;
//     outline: none;
//     font-size: 1rem;
//   }
//   input{
//     height: 45px;
//   }
//   textarea{
//     min-height: 120px;
//     padding: 10px;
//   }
//   button{
//     width: 100%;
//     border: none;
//     color: #eee;
//     background: #000;
//     height: 45px;
//     outline: none;
//     font-size: 1.2rem;
//     cursor: pointer;
//   }
//   @media(max-width: 801px){
//     .headerContainer, button, input, textarea, .rc-anchor{
//     width: 100%;
//     }
//     #rc-anchor-container{
//         width: 275px;
//   }
//   h1{
//     font-size: 26px;
//   }
//   }
// `
const Contact = () => {
    let mail;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  // const [state, setState] = useState({ apiResponse: "" });
  // const [state, setState] = useSate(state = { name: "", email: "", message: "" };})

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
  // let handleChange = e => setFormState({ [e.target.name]: e.target.value });


  function handleChange(e) {

    console.log(e)

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        setErrorMessage('Your email is invalid.');
      } else {

    setFormState({ ...formState, [e.target.name]: e.target.value });
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
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [projectType, setProjectType] = useState("")
  // const [comments, setComments] = useState("")
  function encode(data) {
    console.log(data)
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

 const handleSubmit = e => {
   console.log(e)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message})
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    e.preventDefault();
  };

    return (
      <section className="container">
        <h1 data-testid="Contact me" >Contact me</h1>
        
     
        <form onSubmit={handleSubmit}>
      
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" value={name}  name="name" onBlur={handleChange} onChange={handleChange}  className="boxsmwidth" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <br />
            <input type="email"  value={email} name="email" onBlur={handleChange} onChange={handleChange}  className="boxsmwidth" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea name="message"  value={message}  rows="5" onBlur={handleChange} onChange={handleChange}   className="boxwidth" />
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
  
    // <section className="container">
    //     <h1 data-testid="Contact me" >Contact me</h1>
        
     
    //     <form id="contact-form" action="POST" name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
    //     <input type="hidden" name="form-name" value="contact" />
    //       <div>
    //         <label htmlFor="name">Name:</label>
    //         <br />
    //         <input type="text" id="name" value={name}  name="name" defaultValue={name} onBlur={handleChange} className="boxsmwidth" />
    //       </div>
    //       <div>
    //         <label htmlFor="email">Email address:</label>
    //         <br />
    //         <input type="email" id="email" value={email} name="email" defaultValue={email} onBlur={handleChange} onChange={handleChange} className="boxsmwidth" />
    //       </div>
    //       <div>
    //         <label htmlFor="message">Message:</label>
    //         <br />
    //         <textarea name="message" id="message" value={message}  rows="5" defaultValue={message} onBlur={handleChange} className="boxwidth" />
    //         {errorMessage && (
    //           <div>
    //             <p className="error-text">{errorMessage}</p>
    //           </div>
    //         )}
    //       </div>
    //       <button type="submit">Submit</button>
    //     </form>
    //   </section>

  // return (
  //   <div>
  //     <h1>Lets Chat</h1>
  //     <form
  //       name="contact"
  //       method="post"
  //       action="/thank-you"
  //       data-netlify="true"
  //       onSubmit={handleSubmit}
  //     >
  //       <input type="hidden" name="form-name" value="contact" />
  //       <input
  //         type="text"
  //         name="name"
  //         value={name}
  //         placeholder="Name*"
  //         required
  //         onChange={e => setName(e.target.value)}
  //       />
  //       <input
  //         type="email"
  //         name="email"
  //         value={email}
  //         placeholder="Email*"
  //         required
  //         onChange={e => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="text"
  //         name="projectType"
  //         value={projectType}
  //         placeholder="What are you working on?"
  //         onChange={e => setProjectType(e.target.value)}
  //       />
  //       <textarea
  //         name="comments"
  //         value={comments}
  //         placeholder="Message*"
  //         required
  //         onChange={e => setComments(e.target.value)}
  //       ></textarea>
  //       <button type="submit" id="submit">
  //         Send
  //       </button>
  //     </form>
  //   </div>
  // )
}
export default Contact
//   return (
//       <section className="container">
//         <h1 data-testid="Contact me" >Contact me</h1>
//         <form id="contact-form" onSubmit={handleSubmit}>

//           <div>
//             <label htmlFor="name">Name:</label>
//             <br />
//             <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="boxsmwidth" />
//           </div>
//           <div>
//             <label htmlFor="email">Email address:</label>
//             <br />
//             <input type="email" name="email" defaultValue={email} onBlur={handleChange} onChange={handleChange} className="boxsmwidth" />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <br />
//             <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} className="boxwidth" />
//             {errorMessage && (
//               <div>
//                 <p className="error-text">{errorMessage}</p>
//               </div>
//             )}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </section>
//     )
//   }
// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';


// require('dotenv').config();
// // const sendEmail = require("../../../server.js")



// function Contact() {

//   let mail;
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//   const { name, email, message } = formState;
//   const [errorMessage, setErrorMessage] = useState('');
//   const [state, setState] = useState({ apiResponse: "" });

//   // create reusable transporter object using the default SMTP transport



//   // const sendMail = (mail) => {
//   //   //1.
//   //   fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
//   //     method: "post", //2.
//   //     body: mail, //3.

//   //   }).then((response) => {
//   //     return response.json();
//   //   });
//   // };

//   function handleChange(e) {

//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);
//       // isValid conditional statement
//       if (!isValid) {

//         setErrorMessage('Your email is invalid.');
//       } else {

//         setErrorMessage('');
//       }
//       // isValid conditional statement
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     // setFormState({ ...formState, name: e.target.value })
//     // setFormState({ ...formState, [e.target.name]: e.target.value })

//     console.log('errorMessage', errorMessage);

//     if (!errorMessage) {

//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }

//   }

//   // async function emailSend () {
//   //   let transporter = nodemailer.createTransport({
//   //         host: "smtp.ethereal.email",
//   //         port: 587,
//   //         secure: false, // true for 465, false for other ports
//   //         auth: {
//   //           user: process.env.EMAIL, // generated ethereal user
//   //           pass: process.env.PASSWORD, // generated ethereal password
//   //         },
//   //       });

//   //       let info = await transporter.sendMail({
//   //           from: 'cory.c.calaway@gmail.com', // sender address
//   //           to: "dane65@ethereal.email", // list of receivers
//   //           subject: "Hello ✔", // Subject line
//   //           text: "Hello world?", // plain text body
//   //           html: "<b>Hello world?</b>", // html body
//   //         });

//   //       transporter.sendMail(info, function(err, data) {
//   //           if(err) {
//   //               console.log('err')
//   //           } else {
//   //               console.log('yay')
//   //           }
//   //       })
//   //   }
//   async function callAPI(mail) {
//     console.log(mail)
//     fetch("http://localhost:9000/emailApi", {
//       method: "POST",
//       body: JSON.stringify(mail),
//       headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json"
//       }
//     })
//     .then(res => res.text())        
//     .then(text => console.log(text))}
//     //  .then(response => {
//     //   console.log(response)
//     //   return response.json();
//     // })
   
//       // .then(res => { console.log(res.body)
//       //   res.text()})
//       // .then(res => {
//       //   console.log(res)
//       //   setState({ apiResponse: res })})
//       // .catch(err => err);
    
//       const handleSubmit = event => {
//         event.preventDefault()
//         const form = event.target
//         fetch("/", {
//           method: "POST",
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//           body: encode({
//             "form-name": form.getAttribute("name"),
//             name,
//             email,
//             projectType,
//             comments,
//           }),
//         })
//           .then(() => navigate(form.getAttribute("action")))
//           .catch(error => alert(error))
//       }

//   async function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formState);
//         //clear submit form data
//         e.target.email.value = ''
//         e.target.name.value = ''
//         e.target.message.value = ''
//         mail = formState;
//         handleSubmitEvent(mail)
//   }


  



//         // callAPI(mail)
//         // console.log(emailSend())
//         //  emailSend()
//         //  sendEmail()




//         // emailSend()
//         //  let transporter = nodemailer.createTransport({
//         //   host: "smtp.ethereal.email",
//         //   port: 587,
//         //   secure: false, // true for 465, false for other ports
//         //   auth: {
//         //     user: process.env.EMAIL, // generated ethereal user
//         //     pass: process.env.PASSWORD, // generated ethereal password
//         //   },
//         // });

//         // let info = await transporter.sendMail({
//         //     from: 'cory.c.calaway@gmail.com', // sender address
//         //     to: "dane65@ethereal.email", // list of receivers
//         //     subject: "Hello ✔", // Subject line
//         //     text: "Hello world?", // plain text body
//         //     html: "<b>Hello world?</b>", // html body
//         //   });

//         // transporter.sendMail(info, function(err, data) {
//         //     if(err) {
//         //         console.log('err')
//         //     } else {
//         //         console.log('yay')
//         //     }
//         // })

//         // let transporter = nodemailer.createTransport({
//         //       host: "smtp.ethereal.email",
//         //       port: 587,
//         //       secure: false, // true for 465, false for other ports
//         //       auth: {
//         //         user: process.env.EMAIL, // generated ethereal user
//         //         pass: process.env.PASSWORD, // generated ethereal password
//         //       },
//         //     });

//         //     let info = await transporter.sendMail({
//         //         from: 'cory.c.calaway@gmail.com', // sender address
//         //         to: "dane65@ethereal.email", // list of receivers
//         //         subject: "Hello ✔", // Subject line
//         //         text: "Hello world?", // plain text body
//         //         html: "<b>Hello world?</b>", // html body
//         //       });

//         //     transporter.sendMail(info, function(err, data) {
//         //         if(err) {
//         //             console.log('err')
//         //         } else {
//         //             console.log('yay')
//         //         }
//         //     })

      

//   return (
//       <section className="container">
//         <h1 data-testid="Contact me" >Contact me</h1>
//         <form id="contact-form" onSubmit={handleSubmit}>

//           <div>
//             <label htmlFor="name">Name:</label>
//             <br />
//             <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="boxsmwidth" />
//           </div>
//           <div>
//             <label htmlFor="email">Email address:</label>
//             <br />
//             <input type="email" name="email" defaultValue={email} onBlur={handleChange} onChange={handleChange} className="boxsmwidth" />
//           </div>
//           <div>
//             <label htmlFor="message">Message:</label>
//             <br />
//             <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} className="boxwidth" />
//             {errorMessage && (
//               <div>
//                 <p className="error-text">{errorMessage}</p>
//               </div>
//             )}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </section>
//     )
//   }

//   export default Contact;
