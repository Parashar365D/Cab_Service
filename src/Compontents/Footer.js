import React from 'react';

function Footer() {
    return (
        <>
            <div id="footerImg">
                <div class="row text-center gx-0">
                    <div class="col-sm">
                        <h1>About Us</h1>
                        <p class='fooTer my-4'>Car Rental and Booking Service in Gwalior.</p>
                    </div>
                    <div class="col-sm">
                        <h1>Explore</h1>
                        <p>Home</p>
                        <p>Our Service</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                    </div>
                    <div class="col-sm">
                        <h1>Contact Us</h1>
                        <i class="fa-solid f1 fa-phone-volume mx-3 my-3" style={{ fontSize: "2rem" }}></i>
                        <div>
                            <p>+919109579144</p>
                        </div>
                        <i class="fa-regular f1 fa-envelope mx-3" style={{ fontSize: "2rem" }}></i>
                        <div>
                            <p>Gwaliorcabservice@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container">
                    <h6>@ Copyright [2024] - Gwalior Cab Service | All rights reserved.</h6>
                    <p>5-Star Rated Gwalior Taxi Service || Gwalior to Indore Cab Service || Gwalior to Bhopal Cab Service || Gwalior to Ujjain Cab
                        Service || One Way Cab Service Gwalior || Taxi Service in Gwalior || Airport Cab Service Gwalior</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
