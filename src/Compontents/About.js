import React from 'react';

function About() {
  return (
    <>
      <div id="about_us">
        <div className='row gx-0'>
          <div className="aboutSection1 col">
            <h1>About Us</h1>
            <h2>Best Car Rental & Booking Service In Gwalior</h2>
            <p>Welcome to Gwalior Cab Service, where every journey is an opportunity to experience the pinnacle of transportation excellence. With a commitment to providing the best service in Gwalior, we stand as a testament to reliability, comfort, and customer satisfaction.</p>
            <button className='btn'>Call Now</button>
          </div>
          <div className='aboutSection2 col'>
            <div className="container">
              <img src="/assets/thar.png" alt="thar" />
            </div>
          </div>
        </div>
      </div>

      <div className="aboutSection3">
        <div className="container text-center">
          <h2>"Gwalior Cab Service Your Best Choice for Reliable, Punctual, and Comfortable Journeys!"</h2>
        </div>
        <div className="row gx-0">
          <div className="col">
            <div className="iconBox">
              <i className="f1 fa-solid fa-taxi"></i>
              <h3>Clean Car</h3>
            </div>
            <div className="iconBox">
              <i className="f1 fa-solid fa-scroll"></i>
              <h3>Transparent Billing</h3>
            </div>
            <div className="iconBox">
              <i className="f1 fa-solid fa-rotate-left"></i>
              <h3>No return fare</h3>
            </div>
          </div>
          <div className="col image">
            <img src="/assets/imgMiddle.jpg" alt="imgMiddle" />
          </div>
          <div className="col">
            <div className="iconBox">
              <i className="f1 fa-solid fa-toolbox"></i>
              <h3>Reliable Service</h3>
            </div>
            <div className="iconBox">
              <i className="f1 fa-solid fa-user-tie"></i>
              <h3>Best Driver</h3>
            </div>
            <div className="iconBox">
              <i className="f1 fa-solid fa-shield"></i>
              <h3>Safe And Secure</h3>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <button className='btn'>Call Now</button>
        </div>
      </div>

      <div className="aboutSection4">
        <h1>Our Popular Services</h1>
      </div>
      <div className="gallery-container">
        <div className="gallery-row top-row">
          <div className="gallery-item">
            <div className="img-container">
              <img src="/assets/image1Info.jpg" height={200} alt="image1" />
              <div className="overlay">
                <h3>One Way Service</h3>
                <p>"Discover Gwalior's Rich Heritage! Book Your City Tour Now."</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="img-container">
              <img src="/assets/img2Info.jpg" alt="image2" />
              <div className="overlay">
                <h3>City Tour</h3>
                <p>“Explore Manali’s magic with our curated tour packages! Unforgettable adventures await!”</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-row bottom-row">
          <div className="gallery-item">
            <div className="img-container">
              <img src="/assets/img3Info.jpg" alt="image3" />
              <div className="overlay">
                <h3>Corporate taxis</h3>
                <p>“Boost productivity, plan with us! Tailored business tours & travel packages.”</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="img-container">
              <img src="/assets/img4Info.jpg" alt="image4" />
              <div className="overlay">
                <h3>Airport taxis</h3>
                <p>“Reliable airport taxi service for seamless travel. Prompt pickups, professional drivers, and comfortable rides to your destination. Book now for stress-free airport transfers.”</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="img-container">
              <img src="/assets/img5Info.jpg" alt="image5" />
              <div className="overlay">
                <h3>Long distance taxi</h3>
                <p>“Discover romance in paradise. Unforgettable honeymoon destinations and exclusive travel packages await you!”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutSection4 text-center">
        <h1>What Do Our Clients Say?</h1>
      </div>
      <div className="row justify-content-center gx-0 my-2">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 review">
          <p>“Effortless travel with Gwalior Cab! Their user-friendly booking, and polite drivers make them stand out. My first choice!”</p>
          <h4>Rohit Kapoor</h4>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 review">
          <p>“Reliability at its best! Gwalior Cab has made my travels stress-free with their efficient service. A commendable cab service in Gwalior.”</p>
          <h4>Priya Kapoor</h4>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 review">
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
