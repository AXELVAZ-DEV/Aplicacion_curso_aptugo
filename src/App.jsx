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
      <Main />
    </div>
  )

  function Header() {
    return (
      <header>
        <h1>Axel Vazquez Garcia</h1>
        <h2>Sobre mi</h2>
      </header>
    )
  }

  function Main(){
    return(
      <main>
        <h2>esto es un main</h2>
      </main>
    )
  }
}

export default App
