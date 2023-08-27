import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="newsletter">
        <div className="newsletter-text">Subscribe to our newsletter</div>
        {/* Newsletter form */}
        <input type="email" className="newsletter-input" placeholder="Enter your email" />
        <button className="newsletter-button">Subscribe</button>
      </div>
      <div className="contact-form">
        <div className="form-group">
          <input type="text" className="form-input" placeholder="Your name" />
          <input type="email" className="form-input" placeholder="Your email" />
        </div>
        <textarea className="form-textarea" placeholder="Your message"></textarea>
        <div className="get-in-touch">GET IN TOUCH</div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default Contact;
