import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';

function App(props) {

  const [usuario, setUsu] = useState('');
  console.log(usuario)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));
  }

  return (
    <>
    <h1>{ props.title } { props.user }</h1>
    <h1>{usuario}</h1>
    <input className='usuarioInput' placeholder='Nome' onChange={e => setUsu(e.target.value)}/>
    <button type='button' onClick={handlePesquisa}>Pesquisa</button>
    </>
  );
}

export default App;
