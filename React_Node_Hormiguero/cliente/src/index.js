import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


  const ingeniero =<nav>Dumar Rodriguez</nav>;
  const elementoshijos=(
    <div>
      <h2>elementohijo1</h2>
      <h3>elementohijo3</h3>
    </div>
  );
  

  function formatonombre(usuario){
    return usuario.primernombre + ' ' + usuario.segundonombre;
  }

  function obtener(usuario){

      if(usuario){
        return <h3>Hola Cele, {formatonombre(usuario)}!!</h3>;
      }
      return <h1>hola , Señor Padre.</h1>;
  }

  const usuario ={
    primernombre: 'Ingeniero Exitoso',
    segundonombre: 'Maria Celeste Rodriguez Barragan'
  };
  
  const element = ( <h1> Hola, {obtener(usuario)}!!!! ___ DarkLight</h1>);




ReactDOM.render(

  //** element, llamando constantes desde las variables element, ingeniero, */  
    
    element,
    
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
