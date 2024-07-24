import React from 'react' 
import "./Contact.css"

const Contact = () => {
    return (
    <section id='contact'>
      <div className="container">
        <div className="contact-form">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Join forces with us!</span>
            </h1>
            <p className="muted">Need help? Reach out for any product or order inquiries. We're here for you! </p>
          </div>
          <div className="middle">
            <div className="flex row">
              <input type="text" placeholder='First name' name='firstname' className='control' />
              <input type="text" placeholder='Last name' name='lastname' className='control'/>
            </div>
            <div className="flex row">
              <input type="email" placeholder='Eami address' name='email' className='control' />
              <input type="tel" placeholder='Phone number' name='phone' className='control'/>
            </div>
            <textarea name='message' cols={30} placeholder='Message' className='control'></textarea>
          </div>
          <div className="flex-center bottom">
            <button className='btn primary'>Send Now</button>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Contact
