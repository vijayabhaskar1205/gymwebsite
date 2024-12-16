import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Foot.css";
import "./About.css";

export const About = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav">
        <Container>
        <Navbar.Brand as={Link} to='/'>Fitbull Gym</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link as={Link} to='/di'>Diet Plan</Nav.Link>
              <NavDropdown title="Workout Plan" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/p1' >Phase1</NavDropdown.Item>
            
              </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link as={Link} to='/About' >About us</Nav.Link>
            <Nav.Link as={Link} to='/contact' >Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="banners" data-aos="fade-up" data-aos-duration="1500">
        {/* <div classNameName="content"> */}
        {/* <h3>Delicious Ice Cream</h3> */}
        {/* <h2>UPTO 50% OFF</h2> */}
        {/* <p>Everything is sweeter and more colorful with sprinkles on top. </p> */}
        {/* </div> */}
      </div>
      <section id="about-head" className="section-p11">
        <img src="imagess/ba1.jpg" alt="" />
        <div>
          <h2>Who we are?</h2>
          <p>
            Our gym is equipped with state of the art machinery, ensuring you
            have access to the tools you need to succeed, whether you're focused
            on building strength, improving endurance, or enhancing flexibility.
            Our strength training zone is packed with high-quality free weights,
            resistance machines, and functional training equipment, catering to
            beginners and advanced athletes. For those who prefer a
            cardiovascular workout, our cardio section features treadmills,
            stationary bikes, rowing machines, and ellipticals, all designed to
            help you achieve peak performance. Beyond equipment, Fittbull Gym
            prides itself on offering an array of group fitness classes,
            including high energy Zumba sessions, calming yoga classes, intense
            spin workouts, and core strengthening Pilates. At Fittbull Gym, our
            certified trainers and fitness experts are here to guide you every
            step of the way. Whether you’re looking for personalized one-on-one
            coaching or a tailored workout plan, our trainers use their
            expertise to help you set realistic goals and achieve measurable
            results. Nutrition is a key pillar of health, and we complement our
            fitness programs with professional nutritional guidance, helping you
            create a balanced diet plan that supports your physical goals and
            overall well being. From weight loss journeys to bodybuilding
            aspirations, our team is dedicated to unlocking your potential. Over
            the years, Fittbull Gym has earned its reputation as a place where
            community thrives. We believe that fitness is not just about
            individual progress but also about fostering a collective spirit of
            motivation and support. Our members often describe Fittbull Gym as a
            second home a place where lifelong friendships are formed,
            challenges are conquered, and milestones are celebrated. Whether
            it’s your first time stepping into a gym or you’re a seasoned
            athlete training for your next competition, Fittbull Gym offers a
            welcoming and inclusive environment for all. In addition to
            traditional gym services, we host regular fitness challenges,
            workshops, and events to keep our members engaged and inspired. From
            boot camps to wellness retreats, we create opportunities for our
            community to grow and excel together. As a gym that has been around
            for decades, we understand that trends in fitness are constantly
            evolving. That’s why we stay ahead of the curve, integrating the
            latest advancements in exercise science, fitness technology, and
            workout techniques into our programs. What sets Fittbull Gym apart
            is not just its facilities or programs but its unwavering focus on
            the individual. We understand that everyone’s fitness journey is
            unique, and we take the time to understand your goals, challenges,
            and preferences. Whether you want to lose weight, build muscle,
            improve mobility, or simply maintain a healthy lifestyle, we’re here
            to support you every step of the way. Our membership plans are
            flexible and affordable, ensuring that everyone can access the
            benefits of a healthier, more active life. Fittbull Gym’s
            long-standing legacy is a testament to its ability to adapt,
            innovate, and inspire. While the fitness industry has changed
            dramatically since 1987, our core values of community, quality, and
            dedication remain unchanged. Today, Fittbull Gym continues to be a
            beacon of fitness excellence, welcoming new members and inspiring
            the next generation of fitness enthusiasts. Join us at Fittbull Gym
            and become part of a story that has been 35 years in the making—a
            story of strength, resilience, and transformation. Whether you’re
            here to take the first step or to push past your limits, we’re ready
            to help you achieve greatness.
          </p>
          <br />
          <marquee  className="ma" loop="-1" scrollamount="5" width="100%">
          Fittbull Gym, founded in 1987, is more than just a fitness center it’s a legacy built on passion, dedication, and a relentless commitment 
          to empowering individuals on their fitness journeys. Over the past 35+ years, Fittbull Gym has transformed from a small community gym into
           a renowned hub for health and wellness, trusted by fitness enthusiasts, beginners, and professionals alike.
          </marquee>
        </div>
      </section>
      <div> <footer id="footer"    data-aos="fade-up"
    data-aos-duration="1500">
      <h1 className="text-center">Fitbull-Gym</h1>
      <p className="text-center">Push yourself because no one else is going to do it for you</p>
      <div className="icons text-center">
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-google"></i>
          <i className="bx bxl-skype"></i>
          <i className="bx bxl-instagram"></i>
      </div>
      <div className="copyright text-center">
          &copy; Copyright <strong>Fitbull Gym</strong> .All Rights Reserved
      </div>
     
    </footer></div>
    </div>
  );
};
