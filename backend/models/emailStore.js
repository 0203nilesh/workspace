import mongoose from 'mongoose';

const emailStoreSchema= mongoose.Schema({
    email: {
        type: String,
    }
})

const emailStoreModel= new mongoose.model("EmailStore" ,emailStoreSchema,)

export default emailStoreModel;