import React, { useEffect, useState } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert/Alert';
import { fetchingUser, logout } from '../../../action/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../../assests/IITG_logo2.png';
import { addingEmail, removingEmail } from '../../../action/email';
import { display_alert } from '../../../action/alert';
import AddEmail from './AddEmail/AddEmail';
import AddWebsite from './AddWebsite/AddWebsite';
import AddGoogle from './AddGoogle/AddGoogle';

export default function Navbar() {
  const [show, setShow]= useState(false);
  const [emailShow, setEmailShow]= useState(false);
  const [websiteShow, setWebsiteShow]= useState(false);
  const [googleShow, setGoogleShow]= useState(false);
  function setProfile (){
    if(show){
      setShow(false);
    }else{
      setShow(true);
      setWebsiteShow(false);
      setEmailShow(false);
      setGoogleShow(false);
    }
  } 
  const navigate= useNavigate();
  const dispatch= useDispatch();
  // const {authData}= useSelector((state)=> state.auth);
  // console.log(authData);
  const authData= JSON.parse(localStorage.getItem("auth"));
  // console.log(authData)
  let name= "nilesh chauhan";
  return (
    <>
    <Alert/>
    <nav className='nav-container' >
        <div className="left-box child">
            <img src={image} alt="logo" />
        </div>
        <div className="middle-box child">
            <p>Workspace </p>
        </div>
        <div className="right-box child">
          {authData && (<>
          {authData.user==='admin' && (<> <AddEmail setWebsiteShow={setWebsiteShow} setGoogleShow={setGoogleShow} emailShow={emailShow} setShow={setShow} setEmailShow={setEmailShow} /> </>)}
          {authData.website === "" && (<> <AddWebsite websiteShow={websiteShow} setShow={setShow} setGoogleShow={setGoogleShow} setEmailShow={setEmailShow} setWebsiteShow={setWebsiteShow} /> </>)}
          {authData.google === "" && (<> <AddGoogle googleShow={googleShow} setGoogleShow={setGoogleShow}  setShow={setShow} setEmailShow={setEmailShow} setWebsiteShow={setWebsiteShow} /> </>)}
        {/* <span>{`${authData?.name.split(" ")[0][0].toUpperCase()}${authData?.name.split(" ")[1][0].toUpperCase()}`} </span> */}
          <i onClick={setProfile} className="fa-solid fa-house"></i>
          </>)}
            {show && (<>
              <div className="show-box" style={{animation: "profileBox1 0.1s ease"}} >
              <Link to={authData?.website === ""?('#'):(`${authData?.website}`)} onClick={()=>{
                  if(authData?.website===""){
                    dispatch(display_alert({message: "Please Add Your website", type : "warning"}))
                  }
                  setShow(false);
              }}  > <i className="fa-brands fa-chrome"></i> &nbsp; <span> Website</span></Link>
              <Link to={authData?.google === ""?('#'):(`http://${authData?.google}`)} onClick={()=>{
                if(authData?.google===""){
                  dispatch(display_alert({message: "Please Add Your Google workspace", type: "warning"}));
                }
                setShow(false);
              }}  > <i className="fa-brands fa-google"></i> &nbsp; <span> Google Scholar</span></Link>
              <Link to={"https://iitg.ac.in/eee/"}  onClick={()=>{
                  setShow(false);
              }} > <i className="fa-brands fa-chrome"></i> &nbsp; <span> EEE website</span></Link>
              <Link to={'/'} onClick={()=>{
                dispatch(logout());
                setShow(false);
              }} > 
              <i  className="fa-solid fa-arrow-right-from-bracket">  </i> &nbsp; <span> Logout</span></Link>
              <Link onClick={setProfile} > <i className="fa-regular fa-circle-xmark"></i> &nbsp; <span> Exit</span></Link>
            </div>
            </>)}
        </div>
    </nav>
    </>
  )
}
