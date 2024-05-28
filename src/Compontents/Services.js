import React from 'react';

function Services() {
    return (
        <div id='services'>
            <div className="container text-center ser">
                <h1 style={{ paddingTop: "3rem" }}>Our Popular Car</h1>
                <p>“Ride in Style: Gwalior's Top-Choice Cab Service Unveils Its Most Popular Car Selection!”</p>
            </div>
            <div className="container text-center" style={{ paddingLeft:"3rem", maxWidth:"100%", display:"flex", flexWrap:"wrap", gap:"1.5rem", justifyContent:"center"}}>
                    <div className="col-md my-2">
                        <div className="card">
                            <img src={"/assets/HONDA AMAZE.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HONDA AMAZE</h5>
                                <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call For Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md my-2">
                        <div className="card">
                            <img src={"/assets/INNOVA CRYSTA.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">INNOVA CRYSTA</h5>
                                <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call For Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md my-2">
                        <div className="card">
                            <img src={"/assets/MARUTI SUZUKI ERTIGA.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MARUTI SUZUKI ERTIGA</h5>
                                <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call For Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md my-2">
                        <div className="card">
                            <img src={"/assets/TOYOTA FORTUNER.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">TOYOTA FORTUNER</h5>
                                <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call For Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md my-2">
                        <div className="card">
                            <img src={"/assets/MAHINDRA SCORPIO.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MAHINDRA SCORPIO</h5>
                                <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call For Pricing</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md my-2">
                        <div className="card">
                            <img src={"/assets/MAHINDRA THAR.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MAHINDRA THAR</h5>
                                <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px" }}>Call For Pricing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Services;
