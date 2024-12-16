import React from 'react'
import './Diet.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export const Diet = () => {
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
   <div className="diet-plan">
      <h1>1-Year Gym Diet Routine Plan</h1>

      {/* Phase 1 */}
      <section className="phase">
        <h2>Phase 1: Month 1–2 – Clean Eating Foundation</h2>
        <p><strong>Goal:</strong> Build healthy eating habits, portion control, and consistent meals.</p>
        <p><strong>Focus:</strong> Protein intake for recovery, complex carbs for energy, healthy fats for metabolism.</p>

        <h3>Sample Day Plan</h3>
        <table>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Food Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breakfast</td>
              <td>4 egg whites + 2 whole eggs, 1 bowl of oatmeal with fruits</td>
            </tr>
            <tr>
              <td>Mid-Morning Snack</td>
              <td>1 banana + handful of almonds</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Grilled chicken breast, 1 cup quinoa, steamed broccoli</td>
            </tr>
            <tr>
              <td>Pre-Workout</td>
              <td>1 slice whole-grain bread + peanut butter</td>
            </tr>
            <tr>
              <td>Post-Workout</td>
              <td>1 scoop whey protein + water + 1 apple</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>Baked salmon, sweet potato, and green salad</td>
            </tr>
            <tr>
              <td>Before Bed</td>
              <td>1 cup Greek yogurt or cottage cheese</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Phase 2 */}
      <section className="phase">
        <h2>Phase 2: Month 3–6 – Muscle Building Focus</h2>
        <p><strong>Goal:</strong> Build lean muscle mass and increase strength.</p>
        <p><strong>Focus:</strong> Increase protein (1.2–1.5g per kg of body weight), strategic carbs (pre/post-workout), meal timing for recovery.</p>

        <h3>Sample Day Plan</h3>
        <table>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Food Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breakfast</td>
              <td>6 egg whites + 1 yolk, 1 bowl of oatmeal with blueberries</td>
            </tr>
            <tr>
              <td>Mid-Morning Snack</td>
              <td>Protein shake + handful of walnuts</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Grilled turkey breast, brown rice, asparagus</td>
            </tr>
            <tr>
              <td>Pre-Workout</td>
              <td>Rice cakes with almond butter</td>
            </tr>
            <tr>
              <td>Post-Workout</td>
              <td>1 scoop whey protein + 1 banana</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>Lean beef steak, quinoa, sautéed spinach</td>
            </tr>
            <tr>
              <td>Before Bed</td>
              <td>Casein protein shake or Greek yogurt</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Phase 3 */}
      <section className="phase">
        <h2>Phase 3: Month 7–9 – Strength Gains & Recovery</h2>
        <p><strong>Goal:</strong> Optimize strength gains with nutrient-dense foods.</p>
        <p><strong>Focus:</strong> Carbs around workouts to fuel performance, high protein intake for muscle repair, recovery-focused meals.</p>

        <h3>Sample Day Plan</h3>
        <table>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Food Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breakfast</td>
              <td>3 boiled eggs, whole-grain toast, avocado slices</td>
            </tr>
            <tr>
              <td>Mid-Morning Snack</td>
              <td>1 protein bar + a small handful of cashews</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Grilled fish (tilapia/salmon), sweet potato, green beans</td>
            </tr>
            <tr>
              <td>Pre-Workout</td>
              <td>1 banana + 1 tbsp peanut butter</td>
            </tr>
            <tr>
              <td>Post-Workout</td>
              <td>Protein shake + oats + honey</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>Chicken breast, quinoa, roasted vegetables</td>
            </tr>
            <tr>
              <td>Before Bed</td>
              <td>Cottage cheese or almonds for slow-digesting protein</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Phase 4 */}
      <section className="phase">
        <h2>Phase 4: Month 10–12 – Cutting/Maintenance</h2>
        <p><strong>Goal:</strong> Fine-tune diet for fat loss or maintenance.</p>
        <p><strong>Focus:</strong> Slight calorie deficit for fat loss, maintain muscle mass with protein, healthy fats for hormone balance.</p>

        <h3>Sample Day Plan</h3>
        <table>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Food Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breakfast</td>
              <td>3 egg whites + 1 yolk, spinach omelet, 1 slice whole-grain toast</td>
            </tr>
            <tr>
              <td>Mid-Morning Snack</td>
              <td>Greek yogurt with chia seeds + berries</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Grilled chicken salad (leafy greens, tomatoes, cucumbers)</td>
            </tr>
            <tr>
              <td>Pre-Workout</td>
              <td>Small apple + almond butter</td>
            </tr>
            <tr>
              <td>Post-Workout</td>
              <td>1 scoop protein with water + 1 rice cake</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>Baked cod, steamed asparagus, cauliflower rice</td>
            </tr>
            <tr>
              <td>Before Bed</td>
              <td>Handful of walnuts or low-fat yogurt</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>


    </div>
  )
}
