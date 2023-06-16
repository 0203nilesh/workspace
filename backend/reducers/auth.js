import authModel from "../models/auth.js";

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
    } catch (error) {
        // console.log(error);
        res.status(400).json({message: "Input Data Errored", type: "warning"});
    }
}