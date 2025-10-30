import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './screen/About.js'
import Home from './screen/Home.js'
import Contact from './screen/Contact.js';
import Help from './screen/Help.js';
import Login from './screen/Login.js';
import Register from './screen/Register.js';
import NavBar from './layout/NavBar.js';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/help' element={<Help />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
