import React from "react";
import "./Home.css";
import line2 from "../../assets/Line 2.png";
import line3 from "../../assets/Line 3.png";
import line4 from "../../assets/Line 4.png";
import plantlogo from "../../assets/fa_space-shuttle.png";

const Home = () => {
  return (
    <div className="container home ">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-5">
          <div className="py-5 home-page-logo">
            <div className="d-flex align-items-center ">
              <div>
                <img src={line2} alt="" className="d-block mb-1 line" />
                <img src={line3} alt="" className="d-block mb-1 line" />
                <img src={line4} alt="" className="d-block line" />
              </div>
              <div>
                <img src={plantlogo} alt="" className="ms-2 plantlogo" />
              </div>
            </div>
          </div>
          <div>
            <h2>
              Welcome to <span className="home-title">Globetech</span>
            </h2>
            <p className="pb-4">
              We are committed to deliver{" "}
              <span className="home-detail">best IT services.</span> Our
              Consultants have experience in working with clients. We have
              extensive experience in the software application space and also
              offer a broad range and depth of technology.
            </p>
            <button className="home-button">Support us</button>
            <button className="home-button1">Our Mission</button>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
};

export default Home;
