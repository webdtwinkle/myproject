import React from "react";
 import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/hero-img1.png";
import back from '../src/img/back.jpg';
// import "./hero-section.css";
import "./Herostyle.css";


const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              We are learners
              We are a community of lifelong learners who are on a journey to bridge the gap between our ambitions and abilities.
              Online education has become a viable and exciting method for instructional delivery in the global business society that runs on a 24/7 schedule (24 hours a day/7 days a week)
              </p>
              
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>
        



          <Col lg="6" md="6">
            <img src={back} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
