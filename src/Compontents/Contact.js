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
      <div className="container text-center last">
        <h2 style={{ paddingTop: "9rem" }}>Upto 20% Discounts & Special Offers</h2>
        <p>Rent a Car for 7 Day and get 1 days extra absolutely FREE</p>
        <button className='btn' style={{ backgroundColor: "yellow", height: "40px", width: "300px" }}><h5>Call Now +91 9109579144</h5></button>
      </div>
      <div className="d-flex flex wrap justify-content-center my-2" style={{ padding: "3rem" }} id="contact_us">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Send us a message and we will contact you as soon as possible!</p>
          <div className="container my-5">
          <h5><i className="fa-solid fa-phone-volume mx-3 my-1" style={{ fontSize: "1.5rem", padding: "10px", borderRadius: "10rem", backgroundColor: "#E4D00A", color: "black" }}></i>+91 9109579144</h5>
          <h5><i className="fa-solid fa-envelope mx-3 my-1" style={{ fontSize: "1.5rem", padding: "10px", borderRadius: "10rem", backgroundColor: "#E4D00A", color: "black" }}></i>gwaliorcabservice@gmail.com</h5>
          <h5><i className="fa-solid fa-clock mx-3 my-1" style={{ fontSize: "1.5rem", padding: "10px", borderRadius: "10rem", backgroundColor: "#E4D00A", color: "black" }}></i>Open 24 hours</h5>
          <p><i className="fa-solid fa-location-dot mx-3 my-1" style={{ fontSize: "1.5rem", padding: "10px", borderRadius: "10rem", backgroundColor: "#E4D00A", color: "black" }}></i>65MJ+CFX, Hazira Chowk In Front of taste of India hotel, Gwalior, Madhya Pradesh 474004</p>
          </div>
        </div>
        <div className="Contact_US text-center">
          <h1 className='my-2'>Contact Us</h1>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="cname" className="form-label cf">Name:-</label>
                <input type="text" name="name" className="form-control" placeholder='Full name' id="cname" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="cemail" className="form-label cf">Email:-</label>
                <input type="email" name="email" className="form-control" placeholder='name123@mail.com' id="cemail" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label cf">Message:-</label>
                <textarea name="message" className="form-control" id="message" rows={3} value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className='btn border border-dark text-center' style={{ backgroundColor: "#FFFF00", height: "40px"}}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
