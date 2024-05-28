import React from 'react';

function About() {
  return (
    <>
      <div id="about_us">
        <div className="container d-flex">
          <div className='info2'>
            <h1 className="About_title">About Us</h1>
            <h1>Best Car Rental & Booking Service In Gwalior</h1>
            <p style={{ color: "gray", marginTop: "1rem" }}>Welcome to Gwalior Cab Service, where every journey is an opportunity to experience the pinnacle of transportation excellence. With a commitment to providing the best service in Gwalior, we stand as a testament to reliability, comfort, and customer satisfaction.</p>
            <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px", marginTop: "1rem" }}>Call Now +91 9109579144</button>
          </div>
          <div className='info_img' style={{ maxWidth: "100%", marginTop: "7rem", marginLeft: "3rem" }}>
            <img src={"/assets/thar.png"} alt="thar" style={{ marginLeft: "1rem" }} />
          </div>
        </div>
      </div>
      <div className="img2">
        <div className="container text-center">
          <h2 style={{ paddingTop: "3rem", color: "white", fontWeight: "700" }}>"Gwalior Cab Service Your Best Choice for Reliable, Punctual, and Comfortable Journeys!"</h2>
        </div>
        <div className="container text-center d-flex justify-content-center" style={{ color: "white" }}>
          <div className="leftIcon">
            <div className="col-md my-5">
              <i className="f1 fa-solid fa-taxi"></i>
              <h3>Clean Car</h3>
            </div>
            <div className="col-md my-5">
              <i className="f1 fa-solid fa-scroll"></i>
              <h3>Transparent Billing</h3>
            </div>
            <div className="col-md my-5">
              <i className="f1 fa-solid fa-rotate-left"></i>
              <h3>No return fare</h3>
            </div>
          </div>
          <div className="imgMiddle text-center" style={{ padding: "6rem" }}>
            <img src={"/assets/imgMiddle.jpg"} alt="imgMiddle" width={600} />
          </div>
          <div className="rightIcon">
            <div className="col-md my-5">
              <i className="f1 fa-solid fa-toolbox"></i>
              <h3>Reliable Service</h3>
            </div>
            <div className="col-md my-5">
              <i className="f1 fa-solid fa-user-tie"></i>
              <h3>Best Driver</h3>
            </div>
            <div className="col-md my-5">
              <i className="f1 fa-solid fa-shield"></i>
              <h3>Safe And Secure</h3>
            </div>
          </div>
        </div>
        <div className="container text-center" style={{ marginTop: "-4rem" }}>
          <button className='btn' style={{ backgroundColor: "#E9D66B", height: "40px", width: "200px" }}>Call Now</button>
        </div>
      </div>
      <div className="container">
        <h1 style={{ marginTop: "1rem", textAlign: "center" }}>Our Popular Services</h1>
      </div>
      <div className="container text-center" style={{ padding: "2rem", marginBottom: "3rem", maxWidth: "100%", display: "flex", flexWrap: "wrap", gap: "1.2rem", justifyContent: "center" }}>
        <div className="col-sm">
          <div className="img-container">
            <img src={"/assets/image1Info.jpg"} className='img1Info' width={835} height={500} alt="image1" />
            <div className="overlay">
              <h3>One Way Service</h3>
              <p>"Discover Gwalior's Rich Heritage! Book Your City Tour Now."</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="img-container">
            <img src={"/assets/img2Info.jpg"} className='img1Info' width={400} height={500} alt="image2" />
            <div className="overlay">
              <h3>City Tour</h3>
              <p>“Explore Manali’s magic with our curated tour <br /> packages! Unforgettable adventures await!”</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="img-container">
            <img src={"/assets/img3Info.jpg"} className='img1Info' width={400} height={500} alt="image3" />
            <div className="overlay">
              <h3>Corporate taxis</h3>
              <p>“Boost productivity, plan with us! <br /> Tailored business tours & travel packages.”</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="img-container">
            <img src={"/assets/img4Info.jpg"} className='img1Info' width={400} height={500} alt="image4" />
            <div className="overlay">
              <h3>Airport taxis</h3>
              <p>“Reliable airport taxi service for seamless travel. <br /> Prompt pickups, professional drivers, and <br /> comfortable rides to your destination. Book now for stress-free airport transfers.”</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="img-container">
            <img src={"/assets/img5Info.jpg"} className='img1Info' width={400} height={500} alt="image5" />
            <div className="overlay">
              <h3>Long distance taxi</h3>
              <p>“Discover romance in paradise. Unforgettable honeymoon destinations and exclusive <br /> travel packages await you!”</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center my-5">
        <h1>What Do Our Clients Say?</h1>
      </div>
      <div className="d-flex flex-wrap text-center my-3" style={{ paddingLeft: "2rem", maxWidth: "100%", gap: "2rem", justifyContent:"center" }}>
        <div className="col-sm my-2">
          <p>“Effortless travel with Gwalior Cab! Their user-friendly booking,and polite drivers make them stand out. My first choice!”</p>
          <h4>Rohit Kapoor</h4>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div className="col-sm my-2">
          <p>“Reliability at its best! Gwalior Cab has made my travels stress-free with their efficient service. A commendable cab service in Gwalior.”</p>
          <h4>Priya Kapoor</h4>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div className="col-sm my-2">
          <p>“Outstanding service by Gwalior Cab! Punctual, professional, and affordable. A top-notch experience for every ride!”</p>
          <h4>Alok Kumar</h4>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </div>
    </>
  );
}

export default About;
