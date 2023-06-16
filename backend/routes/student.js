import express from 'express';
import { get_user, get_users } from '../reducers/student.js';

const Router= express.Router();

Router.get("/get", get_users);
Router.get("/get/:id", get_user);

export default Router;