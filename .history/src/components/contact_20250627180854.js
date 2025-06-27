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
    {     
        /*Location map*/
    }
      <div className="map-container" data-aos="fade-up">
        <iframe
          title="Mugly Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.281479041428!2d78.03219111511873!3d30.316495981779196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929fa7403dcfb%3A0x29c888efcc0bdee6!2sClock%20Tower%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1719483000000"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px", marginTop: "1.5rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default contact;
