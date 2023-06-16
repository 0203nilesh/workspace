import { FETCH_ALL_WORK, FETCH_WORK } from "../constant";

export default ((state= {workDetails: [], workData: null}, action)=>{
    switch(action.type){
        case FETCH_ALL_WORK:
            // console.log(action?.data);
            return  {...state,workDetails: action?.data};
        case FETCH_WORK: 
            return {...state, workData: action.data};
        default:
            return {...state};
    }
})