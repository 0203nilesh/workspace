import React, { useState } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert/Alert';
import { logout } from '../../../action/auth';
import { useNavigate } from 'react-router-dom';
import image from '../../../assests/IITG_logo2.png';

export default function Navbar() {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const authData= JSON.parse(localStorage.getItem("auth"));
  // console.log(authData)
  // let name= "nilesh chauhan";
  return (
    <>
    <Alert/>
    <nav className='nav-container' >
        <div className="left-box child">
            <img src={image} alt="logo" />
        </div>
        <div className="middle-box child">
            <p>Workspace</p>
        </div>
        <div className="right-box child">
          {authData && (<>
            <i onClick={()=>{
              dispatch(logout(navigate));
            }} className="fa-solid fa-arrow-right-from-bracket"></i>
        <span>{`${authData?.name.split(" ")[0][0].toUpperCase()}${authData?.name.split(" ")[1][0].toUpperCase()}`} </span>
          </>)}
        </div>
    </nav>
    </>
  )
}
