import express from 'express';
import { login, register } from '../reducers/auth.js';


const Router= express.Router();

Router.post('/login', login);
Router.post("/signup", register);

export default Router;