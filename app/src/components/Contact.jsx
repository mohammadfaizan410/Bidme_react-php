import React, { useState } from 'react'
import "./styles/globalStyles.css"
import "./styles/contact.css"
import emailjs from "@emailjs/browser";
function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    email_from: "",
    message : ""
  })  

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      [e.target.name] : e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_28ght5a", "template_v98mtui", e.target, "K9wNL4V9xgwPBn3GH");
    setSuccessMessage("Your query has been sent!")
    setFormData({
      from_name: "",
      email_from: "",
      message : ""
    })
  } 
  return (
    <div className='container-padded '>
      <div className='contact-container'>
        <div className='contact-left'>
          <h1 className='contactLeft-title'>Let's Talk</h1>
          <p className='contactLeft-desc'>Whether you have a question about a specific item, need assistance with bidding, or simply want to learn more about our services, we are here to help. Please fill out the form to the right and one of our knowledgeable representatives will get back to you as soon as possible.</p>
          <h1 className='contactLeft-email'>Email</h1>
            <p className='contactLeft-emailValue'>Mohammadfaizan410@gmail.com</p>
          <h1 className='contactLeft-email'>Socials</h1>
           <a href="https://www.linkedin.com/in/muhammad-faizan410/" className='contactLeft-link'><p className='contactLeft-emailValue'>Linkdin</p></a>
          </div>
        <div className='contact-right'>
          <form onSubmit={sendEmail}>
          <p>Name</p>
            <input type="text" className='contact-rightInput' name='from_name' onChange={handleChange} value={formData.from_name} />
          <p>Email</p>
            <input type="text" className='contact-rightInput' name='email_from' onChange={handleChange} value={formData.email_from } />
          <p>Message</p>
          <textarea name="message" id="" cols="30" rows="10" className='contact-rightInput' onChange={handleChange} value={formData.message}></textarea>
          <button type='submit' className='contact-rightBtn'>Submit</button>
          </form>
          <p>{ successMessage }</p>
          </div>
        </div>
    </div>
  )
}

export default Contact