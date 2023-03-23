import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from './Router'
import { MainContext } from '../utils/MainContext';

function App() {
  
  const [img_api, setimg_api] = useState([])
  const [update_name, setupdate_name] = useState('')
  const [update_last_name, setupdate_last_name] = useState('')
  const [update_phone, setupdate_phone] = useState('')
  const [update_birth, setupdate_birth] = useState("")

  return (
    <>
    <MainContext.Provider value={{
      img_api, setimg_api,
      update_name, setupdate_name,
      update_last_name, setupdate_last_name,
      update_phone, setupdate_phone,
      update_birth, setupdate_birth,
    }}>
    <Router/>
    </MainContext.Provider>
    </>
  )
}

export default App
