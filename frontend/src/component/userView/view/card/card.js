import React from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import { delete_work_data, get_work_data } from '../../../../action/work';
import { useNavigate } from 'react-router-dom';

export default function Card({data, setUpdateData}) {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const authData= JSON.parse(localStorage.getItem("auth"));
  return (
    <div className='card-container' >
        <div className="title child">
            <p>{data.title.length>15?(<>{data.title.slice(0,15)}...</>):(<>{data.title}</>)}</p>
        </div>
        <div className="description child">
            <p>{data.description.length>70?(<>{data.description.slice(0,70)}...</>):(<>{data.description}</>)}</p>
        </div>
        <div className="creator child">
            <p>{authData.name}</p>
            <p>{data.createdOn}</p>
        </div>
        <div className="button child ">
        <i className="fa-solid fa-pen-to-square" onClick={()=>{
          setUpdateData(data)
          // console.log("here");
        }}></i>
        <i onClick={()=>{
          navigate(`/workView/${data._id}/${authData?.name}`);
        }} class="fa-solid fa-expand"></i>
        <i className="fa-solid fa-trash"  onClick={()=>{
              dispatch(delete_work_data(data._id));
              setTimeout(() => {
                dispatch(get_work_data(authData._id));
              }, 500);
          }}></i>
        </div>
    </div>
  )
}
