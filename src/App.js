import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Comunicacao from './screen/Comunicacao/Comunicacao.js'
import Home from './screen/Home/Home.js'
import Sensoriais from './screen/Sensoriais.js';
import Cognitivo from './screen/Cognitivo.js';
import InteracaoSocial from './screen/InteracaoSocial.js';
import Motora from './screen/Motora.js';
import Login from './screen/Login.js';
import Register from './screen/Register.js';


import NavBar from './layout/NavBar/NavBar.js';
import MenuBar from './layout/MenuBar/MenuBar.js';

function App() {

  return (
    <>
      <Router>
        <MenuBar />
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/comunicacao' element={<Comunicacao />}/>
          <Route path='/sensoriais' element={<Sensoriais />}/>
          <Route path='/cognitivo' element={<Cognitivo />}/>
          <Route path='/interacao-social' element={<InteracaoSocial />}/>
          <Route path='/motora' element={<Motora />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
