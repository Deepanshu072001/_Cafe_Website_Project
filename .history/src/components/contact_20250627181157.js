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
          src='https://maps.app.goo.gl/oB1nmXmQcTxstEnYA'          
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
