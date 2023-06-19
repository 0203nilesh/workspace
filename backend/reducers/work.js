import authModel from "../models/auth.js";
import workModel from "../models/work.js";


export const get_all_work= async(req, res)=>{
    try {
        const id= req.params.id;
        const workData= await workModel.find({studentId: id});
        // console.log(workData);
        if(workData.length!==0){
            res.status(200).json(workData);
        }else{
            res.status(200).json([]);
        }
    } catch (error) {       
        // console.log(error);
        res.status(200).json({message: "Something Went Wrong! ", type: "warning"});
    }
}

export const add_work= async(req, res)=>{
    try {
        const id= req.params.id;
        const data= req.body;
        // console.log(id, data);
        const workData= new workModel({
            ...data,
            studentId: id,
        })
        const dateToSend= await workData.save();
        if(dateToSend){
            const newData= await workModel.find({studentId: id});
            res.status(200).json(newData);
        }else{
            res.status(200).json({message: "Data not saved", type: "warning"})
        }
    } catch (error) {
        // console.log(error);
        res.status(200).json({message: "Something Went Wrong", type: "warning"});
    }
}
export const update_work= async(req, res)=>{
    try {
        const id= req.params.id;
        const data= req.body;
        // console.log(id, data);
        const dataToSend= await workModel.findByIdAndUpdate(id, {title: data.title, description: data.description})
        // console.log(dataToSend);
        if(dataToSend){
            // const newData= await workModel.find();
            res.status(200).json({message: "Data updated Successfully", type: "success"});
        }else{
            res.status(200).json({message: "Not updated!", type: "warning"})
        }
    } catch (error) {
        // console.log(error);
        res.status(200).json({message:"Something Went Wrong!", type: "Warning"});
    }
}

export const delete_work= async(req, res)=>{
    try {
        const id= req.params.id;
        // console.log(id);
        await workModel.findByIdAndDelete(id)
        .then(()=>{
            res.status(200).json({message: "Data delete Successfully", type: "success"});
        }).catch((err)=>{
            // console.log(err);
            res.status(200).json({message: "Data not deleted", type: "warning"});
        })
    } catch (error) {
        // console.log(error);
        res.status(200).json({message: "Something Went Wrong!", type: "warning"});
    }
}
export const filter_work= async(req, res)=>{
    // console.log(req.body);
    try {
        const id= req.params.id;
        const filteredData= await workModel.find({...req.body , studentId: id})
        if(filteredData.length!==0){
            res.status(200).json(filteredData);
        }else{
            res.status(200).json({message: "No Data Found.", type: "success"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Wen Wrong!", type: "warning"});
    }
}
export const get_single_work = async (req, res)=>{
    try {
        const {id}= req.params;
        const workData= await workModel.findById(id);
        if(workData){
            res.status(200).json(workData);
        }else{
            res.status(200).json({message: "Work Not found", type: "warning"});
        }
    } catch (error) {
        res.status(200).json({message: "Something Went Wrong!", type: "warning"});
    }
}
