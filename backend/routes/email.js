import express from 'express';
import { addEmail, removeEmail } from '../reducers/emailStore.js';

const Router= express.Router();

Router.post('/add', addEmail);
Router.post('/remove', removeEmail);

export default Router;