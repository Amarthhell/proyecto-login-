import { useState } from 'react'
import logo from './assets/logo.png'
import logo2 from './assets/archivando.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return (
    <>
       <div>
       <>
  
  <title>Login</title>
  <link rel="stylesheet" href="style.css" />
  <div className="ArchiByte_log">
    <img src={logo} style={{ width: 175 }} alt="Icono" />
  </div>
  <div className="archivando">
    <img src={logo2} style={{ width: 800 }} alt="Icono" />
  </div>
  <div className="formulario">
    <h1>ArchiByte</h1>
    <form method="post" action="LoginPrueba.php">
      {" "}
      {/* Cambiado el action a LoginPrueba.php y envía al usuario al login */}
      <div className="text-box">
        <input type="text" name="username" required="" />{" "}
        {/* Añadido el atributo name */}
        <label>Nombre de usuario</label>
      </div>
      <div className="text-box">
        <input type="password" name="password" required="" />{" "}
        {/* Añadido el atributo name */}
        <label>Contraseña</label>
      </div>
      <input type="submit" defaultValue="Iniciar sesión" />
    </form>
  </div>
</>

    
       </div>
    </>
    );
}
  

  

export default App
