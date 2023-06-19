import React, { useState } from 'react'
import { addingWebsite } from '../../../../action/auth';
import { useDispatch } from 'react-redux';
import { display_alert } from '../../../../action/alert';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddWebsite({websiteShow, setWebsiteShow,setGoogleShow ,setShow, setEmailShow}) {
    const dispatch= useDispatch();
    const [website, setWebsite]= useState("");
    const auth= JSON.parse(localStorage.getItem('auth'));
  return (
    <>
    <i className={"fa-brands fa-chrome"} onClick={()=>{
          if(websiteShow){
            setWebsiteShow(false);
          }else{
            setWebsiteShow(true);
            setShow(false);
            setEmailShow(false);
            setGoogleShow(false);
          }
        }} >
        </i>
    <form className="add-email-box website-box" style={websiteShow ? ({display: 'flex'}) : ({display: "none"})} >
              <p>Adding Website</p>
              <input value={website} onChange={(e)=>{
                  setWebsite(e.target.value);
                }} type="text" name="website" id="website" />
                <div className="email-button">
                <i  className="fa-solid fa-plus" onClick={()=>{
                if(website===""){
                  dispatch(display_alert({type: 'warning', message: "Please Enter Website"}))
                }else{
                  dispatch(addingWebsite(auth._id, website))
                  setWebsite("");
                  setWebsiteShow(false);
                }
              }} ></i>
                </div>
          </form>
    </>
  )
}
