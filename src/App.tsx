import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

let inputNome = useRef <HTMLInputElement>(null)
 let inputIdade = useRef <HTMLInputElement>(null)
 let inputEmpresa = useRef <HTMLInputElement>(null)
 let inputTelefone = useRef <HTMLInputElement>(null)
 
 const enviarFormulario =()=>{

  const nome = inputNome.current?.value
  const idade = inputIdade.current?.value
  const empresa = inputEmpresa.current?.value
  const telefone = inputTelefone.current?.value
 
  axios.post("http://localhost:4000/usuarios",{
    name: nome,
    age:idade,
    company:empresa,
    phone:telefone,
    
  })
   

    }
 
  return (
    <div className="App">
   
    <input type="text"placeholder="Digite seu nome" ref={inputNome} />
    <input type="text"placeholder="Digite sua idade"ref={inputIdade}/>
    <input type="text"placeholder="Digite seu empresa" ref={inputEmpresa} />
    <input type="text"placeholder="Digite sua telefone"ref={inputTelefone}/>
   
    
    <button onClick={enviarFormulario}>Enviar</button>
    </div>
  );
  }  
export default App;
