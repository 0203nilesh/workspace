import * as api from '../api';
import { END_LOADING, FETCH_ALL_WORK, FETCH_WORK, SHOW_ALERT, START_LOADING } from '../constant';

export const get_work_data= (id)=>async(dispatch)=>{
    dispatch({type: START_LOADING});
    const data= await api.get_work_data(id);
    // console.log(data);
    if(!data.message){
        dispatch({type: FETCH_ALL_WORK, data: data});
    }else{
        dispatch({type: FETCH_ALL_WORK, data: []});
        dispatch({type: SHOW_ALERT, data: data});
    }
    dispatch({type: END_LOADING});
}
export const get_single_work=(id)=>async(dispatch)=>{
    const data= await api.fetch_work(id);
    // console.log(data);
    if(!data.message){
        dispatch({type: FETCH_WORK, data: data});
    }else{
        dispatch({type: SHOW_ALERT, data: data});
    }
}
export const add_work_data= (id,data)=>async(dispatch)=>{
    const workData= await api.add_work(id, data);
    // console.log(workData);
    if(!workData.message){
        dispatch({type: FETCH_ALL_WORK, data: workData});
        dispatch({type: SHOW_ALERT, data: {message: "Data added succssefully", type: "success"}});
    }else{
        dispatch({type: SHOW_ALERT, dat: workData});
    }
}
export const update_work_data= (id, data)=>async(dispatch)=>{
    const updatedData= await api.update_work(id,data);
    // console.log(updatedData)
    // if(!updatedData.message){
    //     dispatch({type: FETCH_ALL_WORK, data: updatedData});
    //     dispatch({type: SHOW_ALERT, data: {message: "Data updated successfully", type: "success"}});
    // }else{
        dispatch({type:SHOW_ALERT, data: updatedData});
    // }
}
export const delete_work_data= (id)=>async (dispatch)=>{
    const data= await api.delete_work(id);
    dispatch({type: SHOW_ALERT, data: data});
}
export const filter_work_data= (id,data)=>async(dispatch)=>{
    const filteredData= await api.filter_work(id, data);
    // console.log(filteredData);
    if(!filteredData.message){
        dispatch({type: FETCH_ALL_WORK, data: filteredData});
        dispatch({type: SHOW_ALERT, data: {message: "filter applied", type: "success"}});
    }else{
        dispatch({type: SHOW_ALERT, data: filteredData});
    }
}