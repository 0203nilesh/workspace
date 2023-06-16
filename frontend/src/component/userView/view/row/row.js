import React, { useState } from 'react'
import './style.css';
import Card from '../card/card';
import { useDispatch, useSelector } from 'react-redux';

export default function Row({setUpdateData,setHeading}) {
  const {workDetails}= useSelector((state)=> state.work)
  // console.log(workDetails);  
  return (
    <table className='row-container'>
      <thead>
        <td>Sr No.</td>
        <td>Name</td>
        <td>Date</td>
        <td>Edit</td>
        <td>View</td>
        <td>Delete</td>
      </thead>
      <tbody>
      {!workDetails.message ? (<>
        {workDetails.map((work, index)=>{
        return (<>
          <Card key={work._id} setUpdateData={setUpdateData} sNo={index} data={work}  />
        </>)
      })}
      </>):(<>
      {setHeading("")}
      <div className="no-data">
      <h1>No Work done</h1>
      </div>
      </>)}
      </tbody>
    </table>
  )
}
