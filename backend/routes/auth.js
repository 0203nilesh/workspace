import express from 'express';
import { addGoogle, addWebsite, login, register, removeGoogle, removeWebsite } from '../reducers/auth.js';


const Router= express.Router();

Router.post('/login', login);
Router.post("/signup", register);
Router.post("/website/add/:id", addWebsite)
Router.get("/user/:id");
Router.get("/website/remove/:id", removeWebsite)
Router.post("/google/add/:id", addGoogle);
Router.get("/google/remove/:id", removeGoogle);

export default Router;