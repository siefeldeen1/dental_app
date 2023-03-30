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
  const [saver, setsaver] = useState()
  const [pop, setpop] = useState(false)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [view_Imgs, setview_Imgs] = useState([])
  const [patient_name, setpatient_name] = useState('')

  return (
    <>
    <MainContext.Provider value={{
      img_api, setimg_api,
      update_name, setupdate_name,
      update_last_name, setupdate_last_name,
      update_phone, setupdate_phone,
      update_birth, setupdate_birth,
      saver, setsaver,
      pop, setpop,
      email, setemail,
      password, setpassword,
      view_Imgs, setview_Imgs,
      patient_name, setpatient_name,
    }}>
    <Router/>
    </MainContext.Provider>
    </>
  )
}

export default App
