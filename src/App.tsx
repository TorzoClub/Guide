import React from 'react'
import './App.css'

import PagesContainer from './components/PagesContainer'
import OnePage from './pages/One'
import TwoPage from './pages/Two'

function App() {
  const pages = [
    {
      title: '关于',
      body: <OnePage />,
    },
    {
      title: 'ＴＥＳＴ',
      body: <TwoPage />,
    },
  ]

  return (
    <div className="App">
      <PagesContainer pages={pages} />
    </div>
  )
}

export default App
