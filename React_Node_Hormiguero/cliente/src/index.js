import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




  

const usuario ={
  primernombre: 'Ingeniero Exitoso',
  segundonombre: 'Maria Celeste Rodriguez Barragan'
};


  function formatonombre(usuario){
    return usuario.primernombre + ' ' + usuario.segundonombre;
  }

  function obtener(usuario){

      if(usuario){
        return <h3>Hola Cele, {formatonombre(usuario)}!!</h3>;
      }
      return <h1>hola , Señor Padre.</h1>;
  }


  const element = ( <h1> Hola, {obtener(usuario)}!!!! ___ DarkLight</h1>);




ReactDOM.render(

  //** element, llamando constantes desde las variables element, ingeniero, */  
    
    element,
    
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
