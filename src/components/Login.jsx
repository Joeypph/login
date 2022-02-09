import React from 'react'

function Login() {
  return (
    <div className='row '>
      <div className='col'></div>
      <div className='col' style={{textAlign:'center'}}>
          <form className='form-group' action="">
             <input
              className='form-control mt-4'
              placeholder='Introduce el Email'
              type="text"/>
             <input
              className='form-control mt-4'
              placeholder='Introduce la Contraseña'
              type="text"/>
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