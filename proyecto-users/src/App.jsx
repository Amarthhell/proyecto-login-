import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
  <link rel="stylesheet" href="style.css" />
  <div className="ArchiByte_log">
    <img src="ArchiByte_logo.png" style={{ width: 175 }} alt="Icono" />
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
