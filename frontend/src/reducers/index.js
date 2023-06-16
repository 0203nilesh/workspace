import { combineReducers } from "redux";
import auth from "./auth";
import student from "./student";
import work from './work';
import loader from "./loader";
import alert from "./alert";

export default combineReducers(
    {
        auth,
        student,
        work,
        loader,
        alert
})