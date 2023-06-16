import * as api from '../api';
import { LOGIN, LOGOUT, SHOW_ALERT, SIGNUP } from '../constant';

export const Register= (navigate,data)=>async(dispatch)=>{
    const authData= await api.signup(data);
    // console.log(authData);
    if(!authData?.message){
        localStorage.setItem("auth", JSON.stringify(authData));
        dispatch({type: SHOW_ALERT, data:{message: "Registration Successful"}});
        dispatch({type: SIGNUP, data: authData});
        if(authData?.user==='student'){
            navigate(`/userView/${authData.studentId}`);
        }else{
            navigate("/adminView");
        }
    }
    else{
        dispatch({type: SHOW_ALERT, data: authData});
    }
}
export const Login= (navigate, data)=>async(dispatch)=>{
    const authData= await api.login(data);
    // console.log(authData);
    if(!authData?.message){
        localStorage.setItem("auth", JSON.stringify(authData));
        dispatch({type: SHOW_ALERT, data: {message: "Login Successfull", type: "success"}});
        dispatch({type: LOGIN, data: authData});
        if(authData?.user==='admin'){
            // console.log("1")
            navigate("/adminView");
        }else{  
            // console.log("2");
            navigate(`/userView/${authData?._id}`);
        }    
    }else{
        dispatch({type: SHOW_ALERT, data: authData});
    }
}
export const logout= (navigate)=>async (dispatch)=>{
    localStorage.removeItem("auth");
    dispatch({type: LOGOUT});
    dispatch({type: SHOW_ALERT, data: {message: "Logout Successful", type: "success"}});
    navigate("/");
}
