import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <section id="contact" className="contact-section"> 
         <h2 className="section-title" data-aos="fade-in">Contact Us</h2>
      {/*}
      <form className="contact-form">
        
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
        
      </form>
      */}
      <div className="contact-info" data-aos="zoom-in">
        <p><strong>Email:</strong> contact@muglycafe.com</p>
        <p><strong>Phone:</strong> +91 0000000020</p>
        <p><strong>Address:</strong> 123 Cafe Street, Cityname, Country</p>
      </div>
    </section>
  );
};

export default contact;
