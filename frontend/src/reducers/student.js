import { FETCH_USER, FETCH_USERS } from "../constant";

export default ((state= {studentList: [], studentData: null}, action)=>{
    switch(action.type){
        case FETCH_USERS:
            return {...state, studentList: action.data};
        case FETCH_USER:
            return {...state, studentData: action.data};
        default:
            return {...state};
    }
})