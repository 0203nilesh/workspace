import React, { useEffect, useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export default function User({id, setId}) {
  // const [bgColor, setBgColor]= useState(id)
  const {studentData}= useSelector((state)=> state.student);
  const {studentList}= useSelector((state)=> state.student);
  // console.log(studentList);
  // useEffect(()=>{
  //   if(studentData!==null){
  //     setBgColor(studentData._id);
  //   }
  // },[id])
  return (
    <>
    <div className="user-container">
        <div className="heading child">
            <p>Students</p>
        </div>
        <div className="userList child">
            {studentList!==null?(<>
            {studentList.map((student)=>{
              if(id===student?._id  || student?._id===studentData?._id ){
                return (<>
                <p key={student._id} onClick={()=>{
                  setId(student._id);
                }} style={{backgroundColor: "rgb(98 120 192)", color: "white"}} > {student.name} </p>
                  </>)
              }else{
                return(
                    <>
                <p key={student._id} onClick={()=>{
                  setId(student._id);
                }} > {student.name} </p>
                </>)
              }
            })}
            </>):(<>
            <p>No User</p>
            </>)}
        </div>
    </div>
    </>
  )
}
