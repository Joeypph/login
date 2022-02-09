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
          {msgError != null ? (<div style={{color:'red'}}>{msgError} </div>): (<span></span>) }
      </div>
      <div className='col'></div>
    </div>
  )
}

export default Login