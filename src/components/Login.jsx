import React, {useState} from 'react'
import {auth,createUserWithEmailAndPassword} from '../firebaseconfig'

function Login() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const registrarUsuario = (e) =>{
    e.preventDefault()
    try{
      createUserWithEmailAndPassword(auth,email,password)
      alert('Se ha creado el usuario')
      setEmail('')
      setPassword('')
    }catch(e){
      console.log(e);
    }
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
              type="text"/>

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
      </div>
      <div className='col'></div>
    </div>
  )
}

export default Login