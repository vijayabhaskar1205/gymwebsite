import './Sign.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

export const Sign = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form submitted:', formData);
      };
  return (
    <div>
        <div className='vv'>
       <div className='form-container'>
            <form className="mx-auto">
           
                <h4 className="text-center">Sign Up</h4>
               
                  <label for="exampleInputPassword1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="exampleInputPassword1"/>
                  <label for="exampleInputEmail1" className="form-label">Email Id</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                  <label for="exampleInputPassword1" className="form-label">Mobile No</label>
                  <input type="number" className="form-control" id="exampleInputPassword1"/>
                  <div id="emailHelp" className="form-text mt-3">Forget password ?</div>
                  <Nav.Link as={Link} to='/login'> <button type="submit" className="btn btn-primary mt-5">Sign Up</button></Nav.Link> 
                  </form>
                 
          
              
        </div>
        </div>
    </div>
  )
}
