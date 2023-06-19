import React from 'react'
import { useDispatch } from 'react-redux';
import { addingGoogle, fetchingUser } from '../../../../action/auth';
import { display_alert } from '../../../../action/alert';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function AddGoogle({googleShow, setGoogleShow, setWebsiteShow, setShow, setEmailShow}) {
    const dispatch= useDispatch();
    const [google, setGoogle]= useState("");
    const authData= JSON.parse(localStorage.getItem('auth'));
  return (
    <>
    <i className={"fa-brands fa-google"} onClick={()=>{
          if(googleShow){
            setGoogleShow(false);
          }else{
            setGoogleShow(true);
            setShow(false);
            setEmailShow(false);
            setWebsiteShow(false);
          }
        }} >
        </i>
    <form className="add-email-box website-box" style={googleShow ? ({display: 'flex'}) : ({display: "none"})} >
              <p>Google Scholar</p>
              <input value={google} onChange={(e)=>{
                  setGoogle(e.target.value);
                }} type="text" name="google" id="google" />
                <div className="email-button">
                <i  className="fa-solid fa-plus" onClick={()=>{
                if(google===""){
                  dispatch(display_alert({type: 'warning', message: "Please Enter google scholar acount"}))
                }else{
                  dispatch(addingGoogle(authData._id, google))
                  // dispatch(fetchingUser(authData._id));
                  setGoogle("");
                  setGoogleShow(false);
                }
              }} ></i>
                </div>
          </form>
    </>
    )
}