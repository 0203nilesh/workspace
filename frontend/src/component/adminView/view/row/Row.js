import React from 'react'
import './style.css';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';

export default function Row() {
  let {workDetails}= useSelector((state)=> state.work );
  // console.log(workDetails);
  // if(workDetails.message){
  //   workDetails=null;
  // }
  return (
    <table className="admin-row-container">
      <thead>
        <td>Sr No.</td>
        <td>Date</td>
        <td>Created By</td>
        <td>View</td>
      </thead>
        {(workDetails.length!==0)?(<>
          {workDetails?.map((work, index)=>{
            return(<>
            <Card data={work} srNo={index} key={work._id} />
            </>)
          })}
        </>):(<>
        <div className="no-data">
          <p>No work updated yet!</p>
        </div>
        </>)}
    </table>
  )
}
