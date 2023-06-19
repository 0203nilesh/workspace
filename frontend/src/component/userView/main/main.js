import React, { useEffect, useState } from 'react'
import Filter from '../filter/filter';
import View from '../view/view';
import Create from '../create/Create'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { get_work_data } from '../../../action/work';
import { filter_work } from '../../../api';

export default function Main() {
  const navigate= useNavigate();
  const authData= JSON.parse(localStorage.getItem('auth'));
  const [heading, setHeading]= useState("My Diaries");
  const [updateData, setUpdateData]= useState(null);
  // console.log(updateData);
  const dispatch= useDispatch();
  const {id}= useParams();
  useEffect(()=>{
      dispatch(get_work_data(id));
      setHeading("My Diaries");
      console.log(authData);
      if(authData===null){
        navigate('/');
      }
  } , [id])
  return (
    <>
    {authData===null? (navigate('/')):(<>
      <div className="main-container">
        <View heading={heading} setHeading={setHeading} setUpdateData={setUpdateData} />
        
        <Create setUpdateData={setUpdateData} updateData={updateData} />
    </div>
    </>)}
    </>
  )
}
