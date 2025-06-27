import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title" data-aos="fade-in">Contact Us</h2>
      
      <div className="contact-info" data-aos="zoom-in">
        <p><i className="bi bi-envelope-fill"></i> contact@muglycafe.com</p>
        <p><i className="bi bi-telephone-fill"></i> +91 0000000020</p>
        <p><i className="bi bi-geo-alt-fill"></i> 123 Cafe Street, Cityname, Country</p>
      </div>

      <div className="map-container" data-aos="fade-up">
        <iframe
          title="Mugly Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3443.818242353005!2d78.05035807556463!3d30.327687374782116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE5JzM5LjciTiA3OMKwMDMnMTAuNiJF!5e0!3m2!1sen!2sin!4v1751028044783!5m2!1sen!2sin"
          height="350"
          style={{ border: 0, borderRadius: "10px", marginTop: "1.5rem", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
