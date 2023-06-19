import React, { useEffect, useState } from 'react'
import './style.css';
import User from '../users/User';
import View from '../view/view';
import { useDispatch } from 'react-redux';
import {get_work_data} from '../../../action/work';
import { get_student, get_students } from '../../../action/student';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate= useNavigate();
  const authDate= JSON.parse(localStorage.getItem('auth'));
  const dispatch= useDispatch();
  const [id, setId]= useState("6472fd92414761305e79504f");
  useEffect(()=>{
    dispatch(get_work_data(id));
    dispatch(get_student(id));
    dispatch(get_students());
  },[id])
  return (
    <>
    {authDate===null? (navigate('/')):(
      <>
      <div className="admin-main-container">
        <User id={id} setId={setId} />
        <View />
    </div>
      </>
    )}
    </>
  )
}
