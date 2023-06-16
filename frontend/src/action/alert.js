import { HIDE_ALERT, SHOW_ALERT } from "../constant"

export const display_alert=(data)=>(dispatch)=>{
    dispatch({type: SHOW_ALERT, data: data});
}
export const remove_alert=()=>(dispatch)=>{
    dispatch({type: HIDE_ALERT});
}