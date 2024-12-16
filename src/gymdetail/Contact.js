import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import './Contact.css';
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
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

        <div className="bannerr"    data-aos="fade-up"
 data-aos-duration="1500">
     {/* <div className="content"> */}
         {/* <h3>Delicious Ice Cream</h3> */}
         {/* <h2>UPTO 50% OFF</h2> */}
         {/* <p>Everything is sweeter and more colorful with sprinkles on top. </p> */}
     {/* </div> */}
 </div>

<div id='map'>
<div className="detail" >
    <h3>Visit one of our location</h3>
  <li> <FaMap /><h6>Malumichampatti</h6>
  <h6>2nd Floor,Kathirvel complex </h6>
  <h6> Coimbatore</h6><h6>Tamil Nadu 641050</h6></li> 
<li><FaPhoneAlt /><h6>9342571171</h6> </li>
<li><FaGoogle /><h6>fitbullgym@gmail.com</h6></li>
<li> <FaInstagram /><h6>fit_bull_gym_</h6></li>
</div>
<div className="maps">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.940321545358!2d76.99611777480682!3d10.90361368925296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85be5c008f471%3A0xf29333b87c089c58!2sFitbull%20Fitness%20Studio!5e1!3m2!1sen!2sin!4v1734337262552!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
<div id="form-details">
<div className='cd'>
    <span>Leave a message</span>
    <h2>We love to hear from you!</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="mail" placeholder="E-mail"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
        <button class="normal">Submit</button>
        </div>
     <div class="people">
       
        <div>
            <img src="" alt=""/>
            <p><span>VB </span> Manager 
                <br/>phone: +000 123 0436 <br/>Email: contact@example.com</p>
        </div>
    </div>
</div>

    
    </div>
  )
}
