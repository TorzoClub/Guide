import React from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'

import PagesContainer from './components/PagesContainer'
import pages from './pages'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <PagesContainer pages={pages} />
      </RecoilRoot>
    </div>
  )
}

export default App
