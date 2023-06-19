import * as api from '../api/index';
import { SHOW_ALERT } from '../constant';

export const  addingEmail= (email)=>async(dispatch)=>{
    try {
        const emailResponse= await api.addEmail(email);
        dispatch({type: SHOW_ALERT, data: emailResponse});
    } catch (error) {
        console.log(error);
    }
}
export const  removingEmail= (email)=>async(dispatch)=>{
    try {
        const emailResponse= await api.removeEmail(email);
        dispatch({type: SHOW_ALERT, data: emailResponse});
    } catch (error) {
        console.log(error);
    }
}