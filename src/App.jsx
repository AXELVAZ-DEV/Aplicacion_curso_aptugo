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
      <Contenido />
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

  function Contenido(){

    const  [mostrarMain1, setMostrarMain1] = useState(true)

    const mostrarMain = () => {
      setMostrarMain1((prevMostrarMain1) => !prevMostrarMain1)
    }

    function MainPrincipal(){
      return(
        <main onClick={mostrarMain} className='info'>
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
        <main className='info'>
          <h1><button onClick={mostrarMain} className='tec'>Lo que se</button></h1>
          <div className='contenedores'>
            <div className='contenedor1'>informacion alternativa</div>
            <div className='contenedor2'>imagenes alternativas</div>
          </div>
        </main>
      )
    }

    return(
      <main>
        {mostrarMain1 ? <MainPrincipal /> : <MainAlternativo />}
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
