import axios from "axios";

const API= axios.create({baseURL: "http://localhost:5000/"});

export const signup= async(data)=>{
    const authData= await API.post("/auth/signup", data)
    // console.log(authData.data);
    return authData.data;
}
export const login = async (data)=>{
        const authData= await API.post("/auth/login", data);
        // console.log(authData);
        return authData.data;
    }
    
export const fetch_students= async()=>{
        const studentData= await API.get("/student/get");
        return studentData.data;
    }
export const fetch_student= async(id)=>{
    const studentData= await API.get(`/student/get/${id}`);
    return studentData.data;
}
export const fetch_work= async(id)=>{
    const workData= await API.get(`/work/get/single/${id}`);
    return workData.data;
}
export const get_work_data= async(id)=>{
        const workData= await API.get(`/work/get/${id}`);
        // console.log(workData);
        return workData.data;
}
export const fetch_filter= async(data)=>{
    // const workData= await API.get(``)
}
export const add_work= async(id,data)=>{
    const workData= await API.post(`/work/post/${id}`, data);
    // console.log(workData);
    return workData.data;
}
export const delete_work= async(id)=>{
    const data=await API.delete(`/work/delete/${id}`);
    return data.data;
}
export const update_work= async(id, data)=>{
    const updatedData= await API.patch(`/work/update/${id}`, data);
    // console.log(updatedData);
    return updatedData.data;
}
export const filter_work= async(id, data)=>{
    const filteredData= await API.post(`/work/filter/${id}`, data);
    // console.log(filteredData);
    return filteredData.data;
}

// email adding and removing
export const addEmail= async(email)=>{
    const emailReponse= await API.post('/email/add', {email: email});
    return emailReponse.data;
}
export const removeEmail= async(email)=>{
    const emailReponse= await API.post('/email/remove', {email: email});
    return emailReponse.data;
}
//adding website and removing 
export const addWebsite= async(id, website)=>{
    const websiteResponse = await API.post(`/auth/website/add/${id}`,{website: website} );
    return websiteResponse.data;
}
export const addGoogle= async(id, google)=>{
    const googleResponse = await API.post(`/auth/google/add/${id}`,{google: google} );
    console.log(googleResponse.data);
    return googleResponse.data;
}
export const getUser= async(id)=>{
    const gettingUser= await API.get(`/auth/user/${id}`);
    return gettingUser.data;
}
            
// export const get_work_data= (id)=>API.get(`/work/${id}`);
// export const get_students= ()=> API.get("/student/get");
// export const signup=  (data)=> API.post('/auth/signup',data).data;
// export const login= (data)=> API.post('/auth/login',data).data;
