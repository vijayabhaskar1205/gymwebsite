import React from 'react'
import styles from  "./Workmod.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export default function Workmod() {
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
          <NavDropdown.Item as={Link} to='/p1' >Phase1</NavDropdown.Item>
           

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
    <div className='vbbb'> <div className={styles.container}>
        <div>
  <header>
      <h1>1-Year Workout Plan</h1>
      </header>
    </div>
    <div className={styles.phase}>
      <h2>Phase 1: Foundation (Months 1-3)</h2>
      <p className={styles.goal}>Focus: Building strength, mobility, and cardiovascular fitness.</p>
      <ul className={styles.importantList}>
        <li>Master technique</li>
        <li>Get used to regular workouts</li>
        <li>Improve flexibility</li>
      </ul>
      <h3>Weekly Schedule:</h3>
      <h4>Day 1: Upper Body Strength</h4>
      <ul>
        <li>Bench Press: 3 sets of 8-12 reps</li>
        <li>Dumbbell Row: 3 sets of 10 reps</li>
        <li>Overhead Press: 3 sets of 8-10 reps</li>
        <li>Lat Pulldown: 3 sets of 10-12 reps</li>
        <li>Triceps Dips: 3 sets of 12 reps</li>
        <li>Dumbbell Bicep Curls: 3 sets of 12 reps</li>
      </ul>
      <h4>Day 2: Lower Body Strength</h4>
      <ul>
        <li>Squat (Back or Front): 3 sets of 8-10 reps</li>
        <li>Deadlift: 3 sets of 6-8 reps</li>
        <li>Lunges: 3 sets of 12 reps (each leg)</li>
        <li>Leg Press: 3 sets of 10-12 reps</li>
        <li>Hamstring Curls: 3 sets of 12 reps</li>
        <li>Calf Raises: 3 sets of 15-20 reps</li>
      </ul>
    </div>

    <div className={styles.phase}>
      <h2>Phase 2: Hypertrophy & Strength (Months 4-6)</h2>
      <p className={styles.goal}>Focus: Building muscle size (hypertrophy) and increasing overall strength.</p>
      <ul className={styles.importantList}>
        <li>Progressive overload</li>
        <li>Focus on compound lifts</li>
      </ul>
      <h3>Weekly Schedule:</h3>
      <h4>Day 1: Chest & Triceps</h4>
      <ul>
        <li>Bench Press: 4 sets of 6-8 reps</li>
        <li>Incline Dumbbell Press: 4 sets of 8-10 reps</li>
        <li>Chest Flys: 3 sets of 12 reps</li>
        <li>Dips: 3 sets of 10-12 reps</li>
        <li>Tricep Pushdowns: 3 sets of 12 reps</li>
      </ul>
      <h4>Day 2: Back & Biceps</h4>
      <ul>
        <li>Pull-Ups: 4 sets of 6-8 reps</li>
        <li>Barbell Rows: 4 sets of 8-10 reps</li>
        <li>Lat Pulldown: 3 sets of 10-12 reps</li>
        <li>Seated Rows: 3 sets of 10 reps</li>
        <li>Barbell Curls: 3 sets of 12 reps</li>
      </ul>
    </div>

    <div className={styles.phase}>
      <h2>Phase 3: Strength & Power (Months 7-9)</h2>
      <p className={styles.goal}>Focus: Strength gains through low-rep, high-weight training and power training.</p>
      <h3>Weekly Schedule:</h3>
      <h4>Day 1: Strength Focus - Upper Body</h4>
      <ul>
        <li>Barbell Bench Press: 5 sets of 3-5 reps</li>
        <li>Overhead Press: 4 sets of 5 reps</li>
        <li>Pull-Ups: 4 sets of 6-8 reps</li>
        <li>Weighted Dips: 3 sets of 5-6 reps</li>
        <li>Bicep Curls: 3 sets of 8-10 reps</li>
      </ul>
    </div>

    <div className={styles.phase}>
      <h2>Phase 4: Cutting & Endurance (Months 10-12)</h2>
      <p className={styles.goal}>Focus: Fat loss, cardiovascular conditioning, and muscle endurance.</p>
      <h3>Weekly Schedule:</h3>
      <h4>Day 1: Full Body Workout</h4>
      <ul>
        <li>Compound movements (Squats, Deadlifts, Bench Press): 3-4 sets of 10-12 reps</li>
        <li>HIIT session: 20-30 minutes</li>
      </ul>
    </div>

    <footer>
      <p>1-Year Workout Plan - Stay Strong, Stay Healthy</p>
    </footer>
  </div></div></div>
  )
}
