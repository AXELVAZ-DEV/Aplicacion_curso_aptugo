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
            <div className='sobremi'>
              <p>Soy Axel un estudiante de programacion 100% autodidacta</p>
              <h2>Pasatiempos</h2>
              <p>A parte de la programacion, soy un gran aficionado de <br /> 
              las computadoras y los videojuegos pasando mucho de mi tiempo<br />
               libre en estos ultimos
              </p>
              <p>Decidi estudiar programacion despues de inscribirme en un curso de <br />
               computacion en donde me enseñaron las bases del desarrollo web</p>
            </div>
            <div className='sobremi2'>
              <h2>Experiencia</h2>
              <p>Actualmente tengo mas experiencia en el Frontend que en el Backend</p>
              <p>Esto se debe a que he trabajado mas en proyecto que no requieren del <br />
              mismo, sin embargo, me quiero guiar mas al Backend</p>
              <p>Llevo 2 años estudiando programacion por mi cuenta en todo tipo de <br/>
              fuentes de informacion que pueda encontrar en internet</p>
            </div>
          </div>
          <h4>Al hacer clic en "sobre mi" se mostraran mis habilidades</h4>
        </main>
      )
    }
  
    function MainAlternativo(){
      return(
        <main className='info'>
          <h1><button onClick={mostrarMain} className='tec'>Mis habilidades</button></h1>
          <div className='habilidades'>
            <div className='front'>
              <h2>Frontend</h2>
              <div className='img'>
                <p>aqui van las imagenes</p>
              </div>
            </div>
            <div className='back'>
              <h2>Backend</h2>
              <div className='img'>
                <p>aqui van las imagenes</p>
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
      <section className='proyectos'>
        <h2>Actualmente no tengo ningun proyecto relevante por mostrar</h2>
      </section>
    )
  }
}

export default App
