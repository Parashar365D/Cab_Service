import React from 'react';
import Modal from './Modal';

function Home() {

    return (
        <>
            <div className="position-relative" id='cabservice'>
                <div className='info position-absolute top-50 start-50 translate-middle'>
                    <h1>Gwalior Cab Service</h1>
                    <p>“Gwalior Cab Service: Your Journey, Our Priority!”</p>
                    <button className='btn border border-dark' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#FFFF00", height: "40px" }}>Book Now</button>
                </div>
            </div>
            <div className='container text-center my-3'>
                <h1 style={{ marginTop: "5rem"}}>Why Choose Gwalior Cab Now?</h1>
                <div className="row">
                    <div className="col c1">
                        <i className="f1 fa-solid fa-phone-volume"></i>
                        <h2>Instant Bookings</h2>
                        <p>Swift and easy bookings to get you on the road in no time.</p>
                        <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call Now</button>
                    </div>
                    <div className="col c1">
                        <i className="f1 fa-solid fa-taxi"></i>
                        <h2>Professional Drivers</h2>
                        <p>Our skilled and courteous drivers prioritize your safety and comfort.</p>
                        <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call Now</button>
                    </div>
                    <div className="col c1">
                        <i className="f1 fa-regular fa-calendar-check"></i>
                        <h2>24/7 Availability</h2>
                        <p>Travel any time, day or night, with our round-the-clock service.</p>
                        <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call Now</button>
                    </div>
                </div>
            </div>
            <Modal />
        </>
    );
}

export default Home;
