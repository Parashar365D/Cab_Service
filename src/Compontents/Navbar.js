import React, { useState } from 'react';

function Navbar() {

    const [activeLink, setActiveLink] = useState('Home');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ padding: "0.5rem", backgroundColor: "white" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand mx-auto" href="/Cab_Service">
                    <img src={"/assets/Logo.jpg"} alt="Logo" width="200" height="70" className="d-inline-block align-text-top mx-2" />
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ms-auto mb-b mb-lg-0">
                        <li className="nav-item ">
                            <a className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')} href="#cabservice">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'Services' ? 'active' : ''}`} onClick={() => handleLinkClick('Services')} href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'About Us' ? 'active' : ''}`} onClick={() => handleLinkClick('About Us')} href="#about_us">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeLink === 'Contact Us' ? 'active' : ''}`} onClick={() => handleLinkClick('Contact Us')} href="#contact_us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
