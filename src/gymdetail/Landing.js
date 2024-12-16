import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Landing.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './Lan.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './Ban.css';
import './Carousles.css';
import './Member.css';
import "./Foot.css";
export const Landing = () => {
  const pricingData = [
    {
      title: "Month to Month",
      price: "500Rs",
      features: ["All classes", "All member events", "Full gym access"],
      note: "Charges every month unless you cancel",
    },
    {
      title: "6 Month Membership",
      price: "5500Rs",
      features: ["All classes", "All member events", "Full gym access"],
      note: "Charges every 6 months unless you cancel",
    },
    
    {
      title: "1 Year Membership",
      price: "10000Rs",
      features: ["All classes", "All member events", "Full gym access"],
      note: "Charges every year unless you cancel",
    },
  ];
  return (
    <div> 
           <Navbar  collapseOnSelect expand="lg" className="nav">
    <Container>
      <Navbar.Brand as={Link} to='/'>Fitbull Gym</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/di'>Diet Plan</Nav.Link>
          <NavDropdown title="Workout Plan" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to='/p1' >One Year Plan</NavDropdown.Item>
           
          </NavDropdown>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to='/login' >Login</Nav.Link>
          <Nav.Link as={Link} to='/Sign'>
            Signup
          </Nav.Link>
          <Nav.Link as={Link} to='/About' >About us</Nav.Link>
          <Nav.Link as={Link} to='/contact' >Contact us</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

 

  <div >
 <Row className='justify-content-center align-items-center'>
        <Col lg={12}>
        <Carousel>
        <Carousel.Item>
         
        <div className="hom1">
    <div className="content" data-aos="zoom-out-right">
        <h3>No excuses,
            <br/>just results
        </h3>
        <h3>Category of Workout <span className="changecontent"></span></h3>
        <h4><p>Fitness is not about being better than someone else,
            <br/>it’s about being better than you used to be..</p></h4>
        
    </div>
    <div className="img"  data-aos="zoom-out-left">
        <img src={require('./gymimage/g14')}  alt=""/>
    </div>
</div>
  
        <Carousel.Caption>
          <h4 style={{color: 'white', textShadow: 'inherit'}}>Your competition isn’t others.It’s your procrastination.It’s your ego.It’s the knowledge you neglect.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        
      <div className="hom">
    <div className="content" data-aos="zoom-out-right">
        <h3>Don’t wish for it,
            <br/>work for it.
        </h3>
        <h3>Category of Workout  <span className="changecontent"></span></h3>
     <h4> <p>your body can stand almost anything. It’s your mind you have to convince
        </p></h4>  
       
    </div>
    <div className="img"  data-aos="zoom-out-left">
        <img src={require('./gymimage/g2.jpeg')}  alt=""/>
    </div>
</div>
<Carousel.Caption>
         
         <h4 style={{color: 'white', textShadow: 'inherit'}}>  <p>success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success. Greatness will come.</p></h4>  
         </Carousel.Caption>
       </Carousel.Item>
</Carousel></Col>
      </Row>
    </div>
    <div className="banner"    data-aos="fade-up"
    data-aos-duration="1500">
        <div className="content">
            <h3>One Year MemberShip</h3>
            <h2>UPTO 40% OFF</h2>
            <p>This Week only 40% Offer For New Joining People</p>
            
        </div>
        <div className="img">
            <img src={require('./gymimage/g4.jpeg')} alt=""/>
        </div>
    </div>
    <br></br>
    <div className="group-classes-container">
      
      <div className="group-text">
        <span className="tag">Group CrossFit Classes</span>
        <h1>Get fit while having fun with our group CrossFit classes</h1>
        <ul className="features">
          <li>✅ Just 30 minutes long</li>
          <li>✅ Warm up & workout included</li>
          <li>✅ Fun is guaranteed</li>
        </ul>
      </div>

      <div className="group-image">
        <img
          src={require('./gymimage/g17')} 
          alt="CrossFit Group"
        />
      </div>
    </div>
    <div className="group-classes-container1 reverse-layout1">
      
      <div className="group-image1">
        <img
          src={require('./gymimage/g18.png')}
          alt="CrossFit Group"
        />
      </div>

      <div className="group-text1">
        <span className="tag1">Strength Training</span>
        <h1>Crush any strength program with our suite of strength equipment</h1>
        <ul className="features1">
          <li>✅ Fully fitted powerlifting and strongman section</li>
          <li>✅ Olympic lifting platforms, weights, and bars</li>
          <li>✅ Dumbells ranging 5lbs-250lbs</li>
        </ul>
      </div>
    </div>
    
    <div className="group-classes-container">
    
      <div className="group-text">
        <span className="tag">Personal Training</span>
        <h1>Be guided every step of the way with one of our world class coaches</h1>
        <ul className="features">
          <li>✅ Weightloss</li>
          <li>✅ Competitive CrossFit</li>
          <li>✅ Powerlifting</li>
        </ul>
      </div>

      
      <div className="group-image1">
        <img
          src={require('./gymimage/g19.png')} 
          alt="CrossFit Group"
        />
      </div>
    </div>
    <div className="group-classes-container1 reverse-layout1">
      
      <div className="group-image1">
        <img
          src={require('./gymimage/g20.png')}
          alt="CrossFit Group"
        />
      </div>

      
      <div className="group-text1">
        <span className="tag1">Member Only Events</span>
        <h1>Make new friends and get competitive with fun member events</h1>
        <ul className="features1">
          <li>✅ Friendly competitions</li>
          <li>✅ Friendly competitions</li>
          <li>✅ Summer potlucks and games</li>
        </ul>
      </div>
      </div>
      <br></br>


      <div className="pricing-container">
      {pricingData.map((plan, index) => (
        <div key={index} className="pricing-card">
          <h3 className="pricing-title">{plan.title}</h3>
          <h2 className="pricing-price">{plan.price}</h2>
          <ul className="pricing-features">
            {plan.features.map((feature, idx) => (
              <li key={idx}>&#10003; {feature}</li> 
            ))}
          </ul>
          <p className="pricing-note">{plan.note}</p>
          <button className="pricing-button">Start 7 day free trial</button>
        </div>
      ))}
    </div>
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
  )
}
