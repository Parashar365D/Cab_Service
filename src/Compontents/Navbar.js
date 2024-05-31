import React, { useState } from 'react';

function Navbar() {

    const [activeLink, setActiveLink] = useState('Home');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand mx-auto" href="/Cab_Service">
                    <img src={"/assets/Logo.jpg"} alt="Logo" width="200" height="70" className="d-inline-block align-text-top mx-2" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <a className="navbar-brand" href="/Cab_Service">
                            <img src={"/assets/Logo.jpg"} alt="Logo" width="200" height="70" className="d-inline-block align-text-top mx-2" />
                        </a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
            </div>
        </nav>
    );
}

export default Navbar;
