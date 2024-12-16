import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Login.css';
import React, { useState } from 'react';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add form validation and login logic
        console.log('Form submitted:', formData);
      };
  return (
    <div>
         <div className="loba">
      <div className='form-containers'>      
            <form className="mx-auto">
            
                <h4 className="text-center">Login</h4>
                  <label for="exampleInputEmail1" className="form-label">User Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                  <div id="emailHelp" className="form-text mt-3">Forget password ?</div>
               
              
                <Nav.Link as={Link} to='/'>    <button type="submit" className="btn btn-primary mt-5">Login</button></Nav.Link> 
              </form>
        </div>
        </div>

    </div>
  )
}
