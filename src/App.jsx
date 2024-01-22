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
          <h1><button className='tec'>Sobre mi</button></h1>
          <div className='contenedores'>
            <div className='sobre mi'>
              <p>Soy Axel un estudiante de programacion 100% autodidacta</p>
              <h2>Pasatiempos</h2>
              <p>A parte de la programacion, soy un gran aficionado de las computadoras <br />
               y los videojuegos pasando mucho de mi tiempo libre en estos ultimos
              </p>
              <p>Decidi estudiar programacion despues de inscribirme en un curso de <br />
               computacion en donde me enseñaron las bases del desarrollo web</p>
               <h4>Al hacer clic en "Sobre mi" se podran visualizar mis habilidades</h4>
            </div>
          </div>
        </main>
      )
    }
  
    function MainAlternativo(){
      return(
        <main className='info'>
          <h1><button onClick={mostrarMain} className='tec'>Mis habilidades</button></h1>
          <div className='contenedores'>
            <div className='contenedor1'>
              <div className='front'>
                <h2>Frontend</h2>
              </div>
              <div className='back'>
                <h2>Backend</h2>
              </div>
            </div>
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
