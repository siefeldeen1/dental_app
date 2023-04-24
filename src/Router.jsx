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
import Clinc_info from './pages/clinc_info/Clinc_info';
import View_imgs from './pages/Schedule/view_imgs/View_imgs';
import Join_org from './pages/signup/join_org/Join_org';
import Resto_dentist from './pages/resto_assist/Resto_dentist';

export default function Router() {
  return useRoutes([
    {path: '/Signup', element:  <Signup/> },
    {path: '/join_org', element:  <Join_org/> },
    {path: '/Login', element:  <Login/> },
    {path: '/main_page', element:  <Main_page/> },
    {path: '/questionier', element:  <Questions/> },
    {path: '/Home', element:  <Home_page/> },
    {path: '/', element:  <Test/> },
    {path: '/:id', element:  <Denstist/> },
    {path: '/patient_details', element:  <Patient_details/> },
    {path: '/edit_patient_details', element:  <Home_patient_detials/> },
    {path: '/Schedule', element:  <Schedule/> },
    {path: '/test', element:  <Test/> },
    {path: '/Clinc_info', element:  <Clinc_info/> },
    {path: '/view_imges', element:  <View_imgs/> },
    {path: '/resto_assist', element:  <Resto_dentist/> },
   
    // {path: '/annotator', element:  <Denstist/> },
    ])
}
