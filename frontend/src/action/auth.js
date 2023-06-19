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
        if(authData?.user==="admin"){ 
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
export const logout= ()=>async (dispatch)=>{  
    localStorage.removeItem("auth");
    dispatch({type: LOGOUT});
    dispatch({type: SHOW_ALERT, data: {message: "Logout Successful", type: "success"}});
    // navigate("/");
}

export const addingWebsite= (id, website)=>async(dispatch)=>{
    try {
        const websiteMessage=await api.addWebsite(id, website);
        if(websiteMessage.message){
            dispatch({type: SHOW_ALERT, data: websiteMessage});
        }else{
            dispatch({type: SHOW_ALERT, data: {message: "Website added", type: "success"}})
            localStorage.setItem('auth', JSON.stringify(websiteMessage));
            window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}
export const addingGoogle= (id, google, location)=>async(dispatch)=>{
    try {
        const googleResponse=await api.addGoogle(id, google);
        if(googleResponse.message){
            dispatch({type: SHOW_ALERT, data: googleResponse});
        }else{
            dispatch({type: SHOW_ALERT, data: {message: "Google workspace added", type: "success"}});
             localStorage.setItem("auth", JSON.stringify(googleResponse));
             window.location.reload();
        }
    } catch (error) {
        console.log(error);
    }
}
// export const fetchingUser= (id)=>async(dispatch)=>{
//     try {
//         const userResponse= await api.getUser(id);
//         console.log(userResponse);
//         if(userResponse.message){
//             dispatch({type: SHOW_ALERT, data: userResponse});
//         }else{
//             localStorage.setItem('auth', JSON.stringify(userResponse));
//             dispatch({type: LOGIN, data: userResponse});
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }