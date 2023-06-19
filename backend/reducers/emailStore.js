import authModel from "../models/auth.js";
import emailStoreModel from "../models/emailStore.js";
import workModel from '../models/work.js';


export const addEmail= async(req, res)=>{
    // console.log(req.body);
    try {
        const newMail= new emailStoreModel({
            email: req.body.email,
        })
        const existing= await emailStoreModel.find({email: req.body.email});
        // console.log(existing);
        if(existing.length===0){
            await newMail.save().then(()=>{
                res.status(200).json({message : "Email Addedd successfully", type: "success"})
            }).catch(()=>{
                res.status(200).json({message: "Email not Added", type: "warning"})
            })
        }else{
            res.status(200).json({message: "Email already present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong", type: "warning"});
    }
}
export const removeEmail= async(req, res)=>{
    // console.log(req.body);
    try {
        await emailStoreModel.findOneAndDelete({email: req.body.email}).then(async()=>{
            await authModel.deleteOne({email: req.body.email}).then(async()=>{
                await workModel.deleteMany({email: req.body.email});
                res.status(200).json({message : "Email removed", type: "success"})
            })
        }).catch(()=>{
            res.status(200).json({message: "Email not removed", type: "warning"})
        })
    } catch (error) {
            res.status(200).json({message: "Something went Wrong", type: "warning"});
    }
}