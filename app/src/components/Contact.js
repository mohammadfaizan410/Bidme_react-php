import React from 'react'
import "./globalStyles.css"
import "./contact.css"
function Contact() {
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
          <div className='contact-right'>hi</div>
        </div>
    </div>
  )
}

export default Contact