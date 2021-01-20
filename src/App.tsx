import React from 'react'
import './App.css'

import PagesContainer from './components/PagesContainer'
import OnePage from './pages/One'

function App() {
  const pages = [<OnePage />]

  return (
    <div className="App">
      <PagesContainer pages={pages} />
    </div>
  )
}

export default App
