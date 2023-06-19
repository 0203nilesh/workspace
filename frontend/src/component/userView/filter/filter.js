import React, { useEffect, useState } from 'react'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { filter_work_data } from '../../../action/work';
import { display_alert } from '../../../action/alert';

export default function Filter({setHeading}) {
    const dispatch= useDispatch();
    const {isAlert}= useSelector((state)=> state.alert);
    const {workDetails}= useSelector((state)=> state.work)
    const authData= JSON.parse(localStorage.getItem("auth"));
    const [data, setData]= useState({createdOn:""});
    function formatDate(input) {
        var datePart = input.match(/\d+/g),
          year = datePart[0], // get only two digits
          month = datePart[1],
          day = datePart[2];
        return day + "-" + month + "-" + year;
      }
    function changeHandler(e){
        const date= formatDate(e.target.value);
        setData({createdOn: date});
    }
    
     function filterData(e){

         e.preventDefault();
        // console.log(data);
        // const newCreatedOn= data.createdOn.replaceAll('-','/');
        // console.log(workDetails);
        if(data.createdOn===""){
            dispatch(display_alert({message: "Date field is empty", type: "warning"}))
        }else{
            dispatch(filter_work_data(authData._id,data));
        }
            // setHeading("My Diaries")
        // setData({createdOn:""})
    }
    function displayDate(){
        let year= data.createdOn.substring(6, 10);
                  // 02-03-2002
                  let month= data.createdOn.substring(3, 5);
                  let day= data.createdOn.substring(0,2);
                //   console.log(year+ "-"+ month+ "-"+ day);
          return year+ "-"+ month+ "-"+ day;
      }
  return (
    <>
    <div className="filter-container">
        <form onSubmit={filterData} className='filter-form'>
            {/* <div className="heading child">
                <p>Search</p>
            </div> */}
            <div className="date child">
                {/* <label htmlFor="createdOn">Created On:-</label> */}
                <input type="date" pattern="\d{2}-\d{2}-\d{4}" onChange={changeHandler} value={displayDate()} name="createdOn" id="createdOn" />
            </div>
            <div className="button child">
                <button type="submit">Filter 
                <i className="fa-solid fa-filter"></i>
                 </button>
            </div>
        </form>
    </div>
    </>
  )
}
