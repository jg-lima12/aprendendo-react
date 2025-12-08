import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import Button from './components/Button/Button'
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import { useState } from 'react';


function App() {

  const [array, setArray] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function addList(){
    setArray(
      [...array, {
        title: title,
        description: description
      }]
    )

    setTitle('')
    setDescription('')
  }

  return (
    <div className="app">
      <Input onChange={(e) => setTitle(e.target.value)} value={title} placeHolder='Escreve aqui' size='large' color='white' text='Titulo'/>
      <Input onChange={(e) => setDescription(e.target.value)} value={description} placeHolder='Escrece aqui' size='large' color='white' text='Descrição'/>
      <Button onClick={addList} version='whiteBck' style={{color: '#444444'}} >Criar Card</Button>
      <div className="list">
         {array.map((card) => (
          <Card title={card.title} description={card.description}/>
         ))}
      </div>
    </div>
  );
}

export default App;
