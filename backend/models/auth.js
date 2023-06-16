import mongoose from "mongoose";

const authSchema= new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    user: {
        type: String,
    },
    password: {
        type: String,
    }
})

const authModel= new mongoose.model('Auth', authSchema);
export default authModel;