import React from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import { delete_work_data, get_work_data } from '../../../../action/work';
import { useNavigate } from 'react-router-dom';

export default function Card({data, setUpdateData, sNo}) {
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const authData= JSON.parse(localStorage.getItem("auth"));
  return (
    <tr className='card-container' >
        {/* <div className="title child">
            <p>{data.title.length>15?(<>{data.title.slice(0,15)}...</>):(<>{data.title}</>)}</p>
        </div> */}
        {/* <div className="description child">
            <p>{data.description.length>70?(<>{data.description.slice(0,70)}...</>):(<>{data.description}</>)}</p>
        </div> */}
        {/* <div className="creator child"> */}
            <td>{sNo+1}</td>
            <td>{authData.name}</td>
            <td>{data.createdOn}</td>
        {/* </div> */}
        {/* <div className="button child "> */}
        <td className='button'  onClick={()=>{
          setUpdateData(data)
          // console.log("here");
        }}>
        <i className="fa-solid fa-pen-to-square"></i>
        </td>
        <td className='button' onClick={()=>{
          navigate(`/workView/${data._id}/${authData?.name}`);
        }}>
        <i  class="fa-solid fa-expand"></i>
        </td>
        <td className='button' onClick={()=>{
              dispatch(delete_work_data(data._id));
              setTimeout(() => {
                dispatch(get_work_data(authData._id));
              }, 500);
          }}>
        <i className="fa-solid fa-trash"  ></i>
        </td>
        {/* </div> */}
    </tr>
  )
}
