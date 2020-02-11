import React from 'react'
import './App.css'
import { Game } from './components/Game'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snake Game</h1>
      </header>
      <Game />
    </div>
  )
}

export default App
