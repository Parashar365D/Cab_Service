import React from 'react';

function Services() {
    return (
        <div id='services'>
            <div className="serviceSection1 text-center">
                <h1 >Our Popular Car</h1>
                <p>“Ride in Style: Gwalior's Top-Choice Cab Service Unveils Its Most Popular Car Selection!”</p>
            </div>
            <div className="serviceSection2">
                <div className="row justify-content-center gx-0">
                    <div className="card card2">
                        <img src={"/assets/HONDA AMAZE.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HONDA AMAZE</h5>
                            <button className='btn'>Call For Pricing</button>
                        </div>
                    </div>
                    <div className="card card2">
                        <img src={"/assets/INNOVA CRYSTA.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">INNOVA CRYSTA</h5>
                            <button className='btn'>Call For Pricing</button>
                        </div>
                    </div>
                    <div className="card card2">
                        <img src={"/assets/MARUTI SUZUKI ERTIGA.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MARUTI SUZUKI ERTIGA</h5>
                            <button className='btn'>Call For Pricing</button>
                        </div>
                    </div>
                    <div className="card card2">
                        <img src={"/assets/TOYOTA FORTUNER.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">TOYOTA FORTUNER</h5>
                            <button className='btn'>Call For Pricing</button>
                        </div>
                    </div>
                    <div className="card card2">
                        <img src={"/assets/MAHINDRA SCORPIO.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MAHINDRA SCORPIO</h5>
                            <button className='btn'>Call For Pricing</button>
                        </div>
                    </div>
                    <div className="card card2">
                        <img src={"/assets/MAHINDRA THAR.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MAHINDRA THAR</h5>
                            <button className='btn'>Call For Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
