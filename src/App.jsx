import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function clic(){
    alert("se hizo clic")
  }

  return (
    < Header />
  )

  function Header() {
    return (
      <h1>mi web</h1>
    )
  }
}

export default App
