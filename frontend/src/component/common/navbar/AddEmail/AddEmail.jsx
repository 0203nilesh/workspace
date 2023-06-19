import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { display_alert } from '../../../../action/alert';
import { addingEmail, removingEmail } from '../../../../action/email';
import { fetchingUser } from '../../../../action/auth';
import { useNavigate } from 'react-router-dom';

export default function AddEmail({emailShow, setEmailShow,setGoogleShow ,setShow, setWebsiteShow}) {
    const authData= JSON.parse(localStorage.getItem('auth'));
    const dispatch = useDispatch();
    const [email, setEmail]= useState("");
  return (
    <>
     <i className={"fa-regular fa-square-plus add-email-icon"} onClick={()=>{
          if(emailShow){
            setEmailShow(false);
          }else{
            setEmailShow(true);
            setShow(false);
            setWebsiteShow(false);
            setGoogleShow(false);
          }
        }} >
        </i>
    <form className="add-email-box" style={emailShow ? ({display: 'flex'}) : ({display: "none"})} >
            <p> Adding Email</p>
                <input type="email" value={email} onChange={(e)=>{
                setEmail(e.target.value);
              }} name="email" id="email" />
                
              <div className="email-button">
              <i  className="fa-solid fa-plus" onClick={()=>{
                if(email===""){
                  dispatch(display_alert({type: 'warning', message: "Please Enter Email"}))
                }else{
                  dispatch(addingEmail(email))
                  // dispatch(fetchingUser(authData._id))
                  setEmail("");
                  setEmailShow(false);
                }
              }} ></i>
              <i className="fa-solid fa-minus" onClick={()=>{
                if(email===""){
                  dispatch(display_alert({type: 'warning', message: "Please Enter Email"}))
                }else{
                  dispatch(removingEmail(email));
                  setEmail("");
                  setEmailShow(false);
                }
              }}></i>
              </div>
          </form>
    </>
  )
}
