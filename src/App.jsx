import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from './Router'
import { MainContext } from '../utils/MainContext';

function App() {
  
  const [img_api, setimg_api] = useState()

  return (
    <>
    <MainContext.Provider value={{
      img_api, setimg_api
    }}>
    <Router/>
    </MainContext.Provider>
    </>
  )
}

export default App
