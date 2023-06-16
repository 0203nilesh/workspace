import mongoose from "mongoose";

const workSchema= new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    studentId: {
        type: String,
    },
    createdOn: {
        type: String,
        // default: new Date().toISOString().split('T')[0],
        default: new Date().toLocaleDateString().replaceAll('/', '-'),
    }
})

const workModel= new mongoose.model("Work", workSchema);
export default workModel;