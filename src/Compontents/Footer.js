import React from 'react';

function Footer() {
    return (
        <>
            <div id="footerImg">
                <div className="container text-center" style={{paddingTop:"5rem", maxWidth: "100%", display: "flex", flexWrap: "wrap", justifyContent:"space-evenly" }}>
                    <div className="col-sm">
                        <h1 style={{ color: "red" }}>About Us</h1>
                        <p className='fooTer my-4'>Car Rental and Booking<br/>Service in Gwalior.</p>
                    </div>
                    <div className="col-sm">
                        <h1 style={{ color: "red" }}>Explore</h1>
                        <p className='fooTer my-3'>Home</p>
                        <p className='fooTer my-3'>Our Service</p>
                        <p className='fooTer my-3'>About Us</p>
                        <p className='fooTer my-3'>Contact Us</p>
                        <p className='fooTer my-3'>Blog</p>

                    </div>
                    <div className="col-sm">
                        <h1 style={{ color: "red" }}>Contact Us</h1>
                        <p style={{ marginLeft: "-6.2rem" }}><i className="fa-solid fa-phone-volume mx-3 my-3" style={{ fontSize: "1.5rem", padding: "12px", borderRadius: "10rem", backgroundColor: "#E4D00A", color: "black" }}></i>+919109579144</p>
                        <p><i className="fa-regular fa-envelope mx-3" style={{ fontSize: "1.5rem", padding: "12px", borderRadius: "10rem", backgroundColor: "#E4D00A", color: "black" }}></i>Gwaliorcabservice@gmail.com</p>
                    </div>
                </div>
            </div>
            <footer className="footer" style={{ backgroundColor: "#1C5D99", color: "white", padding: "1rem", textAlign: "center" }}>
                <h6>@ Copyright [2024] - Gwalior Cab Service | All rights reserved.</h6>
                <p>5-Star Rated Gwalior Taxi Service || Gwalior to Indore Cab Service || Gwalior to Bhopal Cab Service || Gwalior to Ujjain Cab
                    Service || One Way Cab Service Gwalior || Taxi Service in Gwalior || Airport Cab Service Gwalior</p>
            </footer>
        </>
    );
}

export default Footer;
