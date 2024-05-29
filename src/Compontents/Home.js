import React from 'react';
import Modal from './Modal';

function Home() {
    return (
        <>
            <div className='firstSection' id='cabservice'>
                <div className='info text-center'>
                    <h1>Gwalior Cab Service</h1>
                    <p>“Gwalior Cab Service: Your Journey, Our Priority!”</p>
                    <button className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                </div>
            </div>
            <div className='secondSection text-center'>
                <h2>Why Choose Gwalior Cab Now?</h2>
                <div className="row justify-content-center gx-0">
                    <div className="card1 card">
                        <div className="card-body">
                            <i className="f1 fa-solid fa-phone-volume"></i>
                            <h3>Instant Bookings</h3>
                            <p>Swift and easy bookings to get you on the road in no time.</p>
                            <button className='btn'>Call Now</button>
                        </div>
                    </div>
                    <div className="card1 card">
                        <div className="card-body">
                            <i className="f1 fa-solid fa-taxi"></i>
                            <h3>Professional Drivers</h3>
                            <p>Our skilled and courteous drivers prioritize your safety and comfort.</p>
                            <button className='btn'>Call Now</button>
                        </div>
                    </div>
                    <div className="card1 card">
                        <div className="card-body">
                            <i className="f1 fa-regular fa-calendar-check"></i>
                            <h3>24/7 Availability</h3>
                            <p>Travel any time, day or night, with our round-the-clock service.</p>
                            <button className='btn'>Call Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <Modal />
        </>
    );
}

export default Home;
