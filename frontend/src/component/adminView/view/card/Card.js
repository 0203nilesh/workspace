import React from 'react'
import './style.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Card({data, srNo ,last}) {
  const navigate= useNavigate();
  const {studentData}= useSelector((state)=> state.student)
//   console.log(studentData);
  return (
    <>
    <tr className='admin-card-container admin-card-child' style={last && ({borderBottom: "2px solid black"})} >
        {/* <div className="title child">
            <p> {data.title} </p>
        </div>
        <div className="description child">
            <p> {data.description} </p>
        </div> */}
        {/* <div className="creator child"> */}
            <td>{srNo+1}.</td>
            <td> {data.createdOn} </td>
            <td className='creatorName' >{studentData?.name}</td>
        {/* </div> */}
        <td onClick={()=>{
            navigate(`/workView/${data._id}/${studentData?.name}`)
        }} className='view-button' >
        <i className="fa-solid fa-expand"></i> 
        </td>
    </tr>

    </>
  )
}
