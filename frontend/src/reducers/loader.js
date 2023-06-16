import { END_LOADING, START_LOADING } from "../constant";

export default ((state={isLoading: false}, action)=>{
    switch(action.type){
        case START_LOADING:
            return {isLoading: true};
        case END_LOADING:
            return {isLoading: false};
        default: 
            return {...state};
    }
})