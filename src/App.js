import logo from './logo.svg';
import './App.css';
import { Landing } from './gymdetail/Landing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Login } from './gymdetail/Login';
import { Sign } from './gymdetail/Sign';
import { About } from './gymdetail/About';
import { Contact } from './gymdetail/Contact';

import {Diet} from './gymdetail/Diet'
import Workmod from './gymdetail/Workmod';



function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/sign' element={<Sign/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/p1' element={<Workmod/>}/>
    <Route path='/di' element={<Diet/>}/>
    </Routes>
  
  </BrowserRouter> 
  );
}

export default App;
