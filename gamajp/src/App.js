import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {

  const [usuario, setUsu] = useState('');

  return (
    <>
    <h1>{ props.title } { props.user }</h1>
    <h1>{usuario}</h1>
    <input className='usuarioInput' placeholder='Nome' onChange={e => setUsu(e.target.value)}/>
    <button type='button'>Pesquisa</button>
    </>
  );
}

export default App;
