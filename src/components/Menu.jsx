import { onAuthStateChanged } from 'firebase/auth'
import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {auth} from '../firebaseconfig'

function Menu() {

  const historial = useNavigate()
  const [user,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(((user) =>{
      if(user){
        setUser(user.email)
      }
    }))
  },[])

  const cerrarSesion = () =>{
    auth.signOut()
    setUser(null)
    historial('/login')
  }

  return (
    <div>
       <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
         <ul className='navbar-nav mr-auto'>
           <li className='nav-item'>
             <Link className="nav-link" to='/'>Inicio</Link>
           </li>
           <li>
             {!user ? <Link className="nav-link" to='/login'>Login</Link>:  <span></span> }
           </li>
           <li>
            {!user ? <Link className="nav-link" to='/admin'>Admin</Link>:  <span></span> }
           </li>
         </ul>
          {user ? <button onClick={cerrarSesion} className='btn btn-danger'>Cerrar Sesión</button> : <span></span>}
       </nav>
    </div>
  )
}

export default Menu