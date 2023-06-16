import express from 'express';
import { add_work, delete_work, filter_work, get_all_work, update_work, get_single_work } from '../reducers/work.js';

const Router= express.Router();

Router.get("/get/:id", get_all_work);
Router.get("/get/single/:id", get_single_work);
Router.post("/post/:id", add_work);
Router.patch("/update/:id", update_work);
Router.delete("/delete/:id", delete_work);
Router.post("/filter/:id", filter_work);

export default Router;