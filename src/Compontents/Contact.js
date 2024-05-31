import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form not connected to server");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="contactSection text-center py-4">
        <h2>Upto 20% Discounts & Special Offers</h2>
        <p>Rent a Car for 7 Days and get 1 day extra absolutely FREE</p>
        <button className="btn">Call Now +91 9109579144</button>
      </div>

      <div className="contactSection1 py-4" id="contact_us">
        <div className="container">
          <div className="row justify-content-center gx-0">
            <div className="col contactInfo text-center text-md-start mb-4">
              <h1>Get In Touch</h1>
              <p>Send us a message and we will contact you as soon as possible!</p>
              <div className="contactSection2">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa-solid f1 fa-phone-volume me-3"></i>
                  <div>
                    <h4>Contact Number</h4>
                    <p>+91 9109579144</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fa-solid f1 fa-envelope me-3"></i>
                  <div>
                    <h4>Email Address</h4>
                    <p>gwaliorcabservice@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fa-solid f1 fa-clock me-3"></i>
                  <div>
                    <h4>Opening Hours</h4>
                    <p>Open 24 hours</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa-solid f1 fa-location-dot me-3"></i>
                  <div>
                    <h4>Address</h4>
                    <p>65MJ+CFX, Hazira Chowk In Front of Taste of India Hotel, Gwalior, Madhya Pradesh 474004</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col contactForm bg-light p-4 rounded">
              <h2 className="text-center mb-4">Contact Us</h2>
              <div className="contactSection3">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="cname" className="form-label cf">Name:</label>
                    <input type="text" name="name" className="form-control" placeholder="Full name" id="cname" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cemail" className="form-label cf">Email:</label>
                    <input type="email" name="email" className="form-control" placeholder="name123@mail.com" id="cemail" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label cf">Message:</label>
                    <textarea name="message" className="form-control" id="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <div className='text-center'>
                  <button type="submit" className="btn">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Contact;
