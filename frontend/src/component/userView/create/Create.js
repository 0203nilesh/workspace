import React, { useEffect, useState } from 'react'
import './style.css';
import { useDispatch } from 'react-redux';
import { add_work_data, get_work_data, update_work_data } from '../../../action/work';

export default function Create({updateData, setUpdateData}) {
    const dispatch= useDispatch();
    const authData= JSON.parse(localStorage.getItem('auth'));
    const [data, setData]= useState(updateData || {title: "", description: ""});
    useEffect(()=>{
        if(updateData!==null){
            setData(updateData);
        }
    }, [updateData])
    // console.log(data);
    function changeHandler(e){
        setData((prevData)=>{
            return {...prevData, [e.target.name]: e.target.value};
        })
    }
    function addWork(e){
        e.preventDefault();
        // console.log(data);
        if(updateData===null){  
            dispatch(add_work_data(authData._id,data));
        }else{
            const id = data._id;
            const dataToSend={title: data.title, description: data.description};
            dispatch(update_work_data(id, dataToSend));
            setTimeout(()=>{
                dispatch(get_work_data(authData._id));
            }, 300)
            setUpdateData(null);
        }
        setData({title: "", description: ""});
    }
  return (
    <> 
    <div className="create-work-container">
        <form  onSubmit={addWork} className="create-work-form">
            <div className="heading child">
                <p>Create Work</p>
            </div>
            <div className="title child">
                <label htmlFor="title">Title:- </label>
                <input type="text" onChange={changeHandler} value={data.title} name="title" id="title" required/>
            </div>
            <div className="description child">
                <label htmlFor="description">Description:- </label>
                <textarea onChange={changeHandler} value={data.description} name="description" id="description" cols="30" rows="10" required></textarea>
            </div>
            <div className="button child">
                <button type="submit">{updateData===null?("Add Work"):("Update Work")}</button>
            </div>
        </form>
    </div>
    </>
  )
}
