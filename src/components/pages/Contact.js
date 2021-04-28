import React, { useState } from "react"

import { validateEmail } from '../../utils/helpers';

const Contact = () => {
   
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

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
      // look into adding formstate here
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    console.log('errorMessage', errorMessage);

    if (!errorMessage) {

      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

   }

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
      console.log(e.target.name.value)
      e.target.name.value = ''
      e.target.email.value = ''
      e.target.message.value = ''
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
  
}
export default Contact
