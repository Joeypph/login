import { signInWithEmailAndPassword } from 'firebase/auth'
import React, {useState} from 'react'
import {auth,createUserWithEmailAndPassword} from '../firebaseconfig'

function Login() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[msgError,setmsgError] = useState(null)

  const registrarUsuario = (e) =>{
    e.preventDefault()

    createUserWithEmailAndPassword(auth,email,password)
    .then(r => alert('Se ha creado el usuario'))
    .catch(e => {
      if(e.code=='auth/invalid-email'){
        setmsgError('Formato de Email incorrecto')
      }
      else if(e.code=='auth/weak-password'){
        setmsgError('La contraseña debe tener al menos 6 caracteres o más')
      }

    })
  }
  const loginUsuario = () =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((r)=>console.log(r))
    .catch((err)=>{
      console.log(err.code)
      if(err.code=='auth/user-not-found'){
        setmsgError('Usuario no encontrado')
      }
      else if(err.code=='auth/wrong-password'){
        setmsgError('La contraseña es incorrecta')
      }
      else if(err.code=='auth/invalid-email'){
        setmsgError('Email no valido')
      }
    })
  }
  return (
    <div className='row '>
      <div className='col'></div>
      <div className='col' style={{textAlign:'center'}}>
          <form className='form-group' onSubmit={registrarUsuario}>
             <input
              onChange={(e)=>{setEmail(e.target.value)}}
              className='form-control mt-4'
              placeholder='Introduce el Email'
              type="email"/>

             <input
              onChange={(e)=>{setPassword(e.target.value)}}
              className='form-control mt-4'
              placeholder='Introduce la Contraseña'
              type="password"/>

             <input
              className='btn btn-dark mt-4' 
              placeholder='Introduce la Contraseña'
              type="submit"
              value="Registrar Usuario"/>
          </form>
          <button
          onClick={loginUsuario}
            className='btn btn-success btn-block'>
            Iniciar Sesión
          </button>
          {msgError != null ? (<div className='alert alert-danger'>{msgError} </div>): (<span></span>) }
      </div>
      <div className='col'></div>
    </div>
  )
}

export default Login