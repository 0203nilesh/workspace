import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Home from './component/home/Home'
import Navbar from './component/common/navbar/Navbar'
import Footer from './component/common/footer/Footer'
import Loader from './component/common/loader/Loader'
import { useSelector } from 'react-redux'
import UserView from './component/userView/main/main';
import AdminView from './component/adminView/main/main';
import Auth from './component/auth/Auth'
import WorkView from './component/common/workView/WorkView'

export default function App() {
  const [isLoading, setIsLoading]= useState(useSelector((state)=>state.loader.isLoading));
  // console.log(isLoading);
  
  return (
    <>
    {isLoading? (<>
      <Loader/>
      </>):(<>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Auth/>} />
      <Route path='/userView/:id' element={<UserView />} />
      <Route path='/adminView' element={<AdminView/ >}/>
      <Route path='/workView/:id/:name' element={ <WorkView/> }  />
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
      </>)}
    </>
  )
}
