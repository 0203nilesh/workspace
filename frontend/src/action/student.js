import * as api from '../api';
import { FETCH_USER, FETCH_USERS, SHOW_ALERT } from '../constant';

export const get_students= ()=>async(dispatch)=>{
    const data= await api.fetch_students();
    // console.log(data);
    if(!data.message){
        dispatch({type: FETCH_USERS, data: data});
    }else{
        dispatch({type: SHOW_ALERT, data: data.data});
    }
}

export const get_student= (id)=>async(dispatch)=>{
    const studentData= await api.fetch_student(id);
    // console.log(studentData);
    if(!studentData.message){
        dispatch({type: FETCH_USER, data: studentData});
    }else{
        dispatch({type: SHOW_ALERT, data: studentData});
    }
}
