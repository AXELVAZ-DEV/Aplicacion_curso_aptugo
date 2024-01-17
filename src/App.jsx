import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  function clic(){
    alert("se hizo clic")
  }

  return (
    <div>
      < Header />
      <Footer />
    </div>
  )

  function Header() {
    return (
      <header>
        <h1>Axel Vazquez Garcia</h1>
        <img className='perfil' src='./src/assets/imagen.jpg' alt='imagen de perfil'/>
      </header>
    )
  }

  function MainPrincipal(){
    return(
      <main>
        <h1><button className='tec'>Mis tecnologias</button></h1>
        <div className='contenedores'>
          <div className='contenedor1'>informacion</div>
          <div className='contenedor2'>imagenes</div>
        </div>
      </main>
    )
  }

  function MainAlternativo(){
    return(
      <main>
        <h1><button className='tec'>Mis tecnologias</button></h1>
        <div className='contenedores'>
          <div className='contenedor1'>informacion</div>
          <div className='contenedor2'>imagenes</div>
        </div>
      </main>
    )
  }

  function Footer() {
    return(
      <footer>
        <h2>esto es un footer</h2>
      </footer>
    )
  }
}

export default App
