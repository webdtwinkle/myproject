import React from "react";

import './Aboutstyle.css';
import { Container, Row, Col } from "reactstrap";
// import aboutImg from "../../assests/images/about-us.png";
 import CountUp from "react-countup";
 import a from '../src/img/a.png';
// import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
               <img src={a} alt="" className="w-100" /> 
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Our Mission</h2>
              <p>
              We want to create a world where anyone can build something meaningful with
               technology, and everyone has the learning tools, resources, and opportunities to do so. 
               So we create a world of possibilities — all that’s required is the curiosity and drive to learn.
                At EduHub, we are committed to empowering all people, regardless of where they are in their
                  journeys, to continue to learn, grow, and make an impact on the world around them.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={15} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Completed Courses</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Students Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Lesson To Learned</p>
                   
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={15} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
