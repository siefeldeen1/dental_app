import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Signup from './pages/signup/signup';
import Login from './pages/login/login'
import Main_page from './pages/main_page/main_page'
import Questions from './pages/question_page/questions'; 
import Home_page from './pages/home_page/home_page';
import Denstist from './pages/dentist/denstist';
import Patient_details from './pages/patient_details/Patient_details';
import Schedule from './pages/Schedule/Schedule';
import Test from './pages/test/Test';
import Home_patient_detials from './pages/patient_details/home_patient/Home_patient_detials';

export default function Router() {
  return useRoutes([
    // {path: '/', element:  <Signup/> },
    {path: '/Login', element:  <Login/> },
    {path: '/main_page', element:  <Main_page/> },
    {path: '/questionier', element:  <Questions/> },
    {path: '/Home', element:  <Home_page/> },
    {path: '/', element:  <Denstist/> },
    {path: '/patient_details', element:  <Patient_details/> },
    {path: '/edit_patient_details', element:  <Home_patient_detials/> },
    {path: '/Schedule', element:  <Schedule/> },
    {path: '/test', element:  <Test/> },
    // {path: '/annotator', element:  <Denstist/> },
    ])
}
