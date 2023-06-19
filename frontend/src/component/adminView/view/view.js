import React, { useState } from 'react'
import Row from './row/Row'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { filter_work_data } from '../../../action/work';
import { display_alert } from '../../../action/alert';

export default function View() {
  const dispatch= useDispatch();
  const [data, setData]= useState({createdOn: ""});
  const {studentData}= useSelector((state)=> state.student);
  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0], // get only two digits
      month = datePart[1],
      day = datePart[2];
    return day + "-" + month + "-" + year;
  }
  function changeHandler(e){
    const date= formatDate(e.target.value);
    // console.log(date);  
    setData({createdOn: date});
  }
  function applyFilter(){
    if(data.createdOn===""){
        dispatch(display_alert({message: "Date field is empty", type: "warning"}))
    }else{
      dispatch(filter_work_data(studentData._id, data));
    }
    // console.log(data);
    // setData({createdOn: ""});
  }
  function displayDate(){
    let year= data.createdOn.substring(6, 10);
              // 02-03-2002
              let month= data.createdOn.substring(3, 5);
              let day= data.createdOn.substring(0,2);
              // console.log(year+ "-"+ month+ "-"+ day);
      return year+ "-"+ month+ "-"+ day;
  }
  return (
    <>
    <div className="admin-view-container">
        <div className="heading child">
            <p>{studentData!==null? (<>{`${studentData.name}'s`}</>):("Varun Singh's")} Diary</p>
          <div className="admin-filter-container">
              <div className="date">
                  <input type="date" onChange={changeHandler} value= {displayDate()} placeholder='Creation Date' name="createdOn" id="createdOn"  />
              </div>
              <div className="button">
              <i onClick={applyFilter} className="fa-solid fa-filter">Apply</i>
              </div>
          </div>
        </div>
        <Row  />
    </div>
    </>
  )
}
