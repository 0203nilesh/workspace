import React, { useState } from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import { filter_work_data } from '../../../action/work';

export default function Filter({setHeading}) {
    const dispatch= useDispatch();
    const authData= JSON.parse(localStorage.getItem("auth"));
    const [data, setData]= useState({createdOn:""});
    function changeHandler(e){
        setData((prevData)=>{
            return{...prevData, [e.target.name]: e.target.value};
        });
    }
     function filterData(e){
         e.preventDefault();
        // console.log(data);
        // const newCreatedOn= data.createdOn.replaceAll('-','/');
        // console.log(newCreatedOn);
        dispatch(filter_work_data(authData._id,data));
        setHeading(`${data.createdOn} Work`)
        setData({createdOn:""})
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
                <input type="date" pattern="\d{2}-\d{2}-\d{4}" onChange={changeHandler} value={data.createdOn} name="createdOn" id="createdOn" />
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
