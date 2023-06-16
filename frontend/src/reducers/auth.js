import { LOGIN, LOGOUT, SIGNUP } from "../constant";

export default((state= {authData: null}, action)=>{
    switch(action.type){
        case  SIGNUP: 
        return {...state, authData: action?.data};
        case LOGIN:
        return {...state, authData: action?.data};
        case LOGOUT:
        return {...state, authData: null};
        default:
            return {...state};
    }
})