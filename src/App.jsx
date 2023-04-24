import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from './Router'
import { MainContext } from '../utils/MainContext';
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();
  const [img_api, setimg_api] = useState([])
  const [update_name, setupdate_name] = useState('')
  const [update_last_name, setupdate_last_name] = useState('')
  const [update_phone, setupdate_phone] = useState('')
  const [update_birth, setupdate_birth] = useState("")
  const [saver, setsaver] = useState()
  const [data_type_id, setdata_type_id] = useState()
  const [pop, setpop] = useState(false)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [first_name, setfirst_name] = useState()
  const [last_name, setlast_name] = useState()
  const [view_Imgs, setview_Imgs] = useState([])
  const [patient_name, setpatient_name] = useState('')
  const [islogged, setislogged] = useState()
  const [patient_id, setpatient_id] = useState()
  const [table_under, settable_under] = useState()
  const [tooth_numbering, settooth_numbering] = useState()
  const [added_date, setadded_date] = useState()

  return (
    <>
    <MainContext.Provider value={{
      img_api, setimg_api,
      update_name, setupdate_name,
      update_last_name, setupdate_last_name,
      update_phone, setupdate_phone,
      update_birth, setupdate_birth,
      saver, setsaver,
      data_type_id, setdata_type_id,
      pop, setpop,
      email, setemail,
      password, setpassword,
      first_name, setfirst_name,
      last_name, setlast_name,
      view_Imgs, setview_Imgs,
      patient_name, setpatient_name,
      patient_id, setpatient_id,
      table_under, settable_under,
      tooth_numbering, settooth_numbering,
      added_date, setadded_date,
    }}>
    <Router/>
    </MainContext.Provider>
    </>
  )
}

export default App
