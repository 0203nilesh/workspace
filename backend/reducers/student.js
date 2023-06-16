import authModel from "../models/auth.js";

export const get_users= async(req, res)=>{
    // console.log("users");
    try {
        const users= await authModel.find({user: "student"});
        // console.log(users);
        if(users.length!==0){
            res.status(200).json(users);
        }else{
            res.status(200).json({message: "No user present", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "warning"});
    }
}
export const get_user= async(req, res)=>{
    // console.log("user");
    try {
        const {id}= req.params;
        // console.log(id);
        const user= await authModel.findById(id);
        if(user){
            res.status(200).json(user);
        }else{
            res.status(200).json({message: "User Not Found!", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message : "Something Wen Wrong!", type: "warning"})
    }
}