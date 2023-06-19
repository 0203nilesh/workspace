import authModel from "../models/auth.js";
import emailStoreModel from '../models/emailStore.js';

export const login= async(req, res)=>{
    // console.log("HI");
    // console.log(req.body);
    try {
        const data= req.body;
        const existingUser= await authModel.find({email: data.email});
        // console.log(existingUser);
        if(existingUser.length!==0){
            if(existingUser[0].password===data.password){
                res.status(200).json(existingUser[0]);
            }else{
                res.status(200).json({message: "Incorrect Password! ", type: "warning"})
            }
        }else{
            res.status(200).json({message: "User not found!", type: "warning"})
        }
    } catch (error) {
        // console.log(error);
        res.status(400).json({message: "Something went Wrong", type: "warning"});
    }
}
export const register= async(req, res)=>{
    // console.log(req.body);
    try {
        const isAbleToRegister= await emailStoreModel.find({email: req.body.email});
        // console.log(isAbleToRegister);
        if(isAbleToRegister.length!==0){
            const existingUser= await authModel.find({email: req.body.email});
        // console.log(existingUser);
        if(existingUser.length!==0){
            res.status(200).json({message: "Email already registered.", type: "warning"});
        }else{
            const authDate= new authModel({...req.body});
            await authDate.save()
            .then(()=>{
                res.status(200).json(authDate);
            }).catch((err)=>{
                // console.log(err);
                res.status(200).json({message: "Server error not registerd", type: "warning"})
            })
        }
        }else{
            res.status(200).json({message: "Email not present in the database.", type: "warning"})
        }
    } catch (error) {
        // console.log(error);
        res.status(400).json({message: "Input Data Errored", type: "warning"});
    }
}

export const addWebsite= async( req, res)=>{
    // console.log(req.body);
    try {
        const {id}= req.params;
        // console.log(id);
        const newWebsite= await authModel.findByIdAndUpdate(id, {website: req.body.website});
        if(newWebsite){
            res.status(200).json(newWebsite);
        }else{
            res.status(200).json({message: "Website not added", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something went wrong", type: "warning"});
    }
}
export const removeWebsite= async( req, res)=>{
    try {
        const {id}= req.params;
        const newWebsite= await authModel.findByIdAndUpdate(id, {website: ""});
        if(newWebsite){
            res.status(200).json(newWebsite);
        }else{
            res.status(200).json({message: "Website not removed", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something went wrong", type: "warning"});
    }
}
export const addGoogle= async( req, res)=>{
    // console.log(req.body);
    try {
        const {id}= req.params;
        // console.log(id);
        const newGoogleId = await authModel.findByIdAndUpdate(id, {google: req.body.google});
        if(newGoogleId){
            res.status(200).json(newGoogleId);
        }else{
            res.status(200).json({message: "Google Scholar not added", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something went wrong", type: "warning"});
    }
}

export const removeGoogle= async( req, res)=>{
    try {
        const {id}= req.params;
        await authModel.findByIdAndUpdate(id, {google: ""}).then(()=>{
            res.status(200).json({message: "Google Scholar removed", type: "success"});
        }).catch(()=>{
            res.status(200).json({message: "Google Scholar not removed", type: "warning"});
        })
    } catch (error) {
        res.status(200).json({message: "Something went wrong", type: "warning"});
    }
}

export const singleUser= async(req, res)=>{
    try {
        const {id}= req.params;
        const user= await authModel.findById(id);
        if(user){
            res.status(200).json(user);
        }else{
            res.status(200).json({message : "No user present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong", type: "warning"});
    }
}