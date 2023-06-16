import React, { useState } from 'react'
import './style.css';
import Card from '../card/card';
import { useDispatch, useSelector } from 'react-redux';

export default function Row({setUpdateData,setHeading}) {
  const {workDetails}= useSelector((state)=> state.work)
  // console.log(workDetails);  
  return (
    <div className='row-container'>
      {!workDetails.message ? (<>
        {workDetails.map((work)=>{
        return (<>
          <Card key={work._id} setUpdateData={setUpdateData} data={work}  />
        </>)
      })}
      </>):(<>
      {setHeading("")}
      <div className="no-data">
      <h1>No Work done</h1>
      </div>
      </>)}
    </div>
  )
}
