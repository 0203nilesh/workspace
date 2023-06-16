import React, { useEffect } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { get_single_work } from '../../../action/work';

export default function WorkView() {
    const navigate= useNavigate();
    const authData= JSON.parse(localStorage.getItem('auth'));
    const dispatch= useDispatch();
    const {id}= useParams();
    const {name}= useParams();
    useEffect(()=>{
        dispatch(get_single_work(id));
    }, [])
    const {workData}= useSelector((state)=> state.work);
    // console.log(id, name);
  return (
    <>
    <div className="workView-container">
        <div className="heading child">
            <p> {workData?.title} </p>
        </div>
        <div className="description child">
            <p> {workData?.description} </p>
        </div>
        <div className="creator child">
            <p> {name} </p>
            <p> {workData?.createdOn} </p>
        </div>
        <div className="button child">
            <button onClick={()=>{
                if(authData?.user==='admin'){
                    navigate('/adminView');
                }else{
                    navigate(`/userView/${authData._id}`);
                }
            }} >Back</button>
        </div>
    </div>
    </>
  )
}
