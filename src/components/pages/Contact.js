import { nearer } from 'q';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {


  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

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
      setFormState({ ...formState, [e.target.name]: e.target.value })

      console.log('errorMessage', errorMessage);
      if (!errorMessage) {

          setFormState({ ...formState, [e.target.name]: e.target.value });
      }
      
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
      //clear submit form data
      e.target.email.value = ''
      e.target.name.value = ''
      e.target.message.value = ''

      console.log(e.target.name)
      console.log(e.target.email.value)
      
      

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
                  <br/>
                  <input type="email" name="email" defaultValue={email} onBlur={handleChange} className="boxsmwidth"/>
              </div>
              <div>
                  <label htmlFor="message">Message:</label>
                  <br/>
                  <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} className="boxwidth"/>
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
