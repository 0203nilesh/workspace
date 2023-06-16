import dotenv from  'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config();
import authRoutes from './routes/auth.js';
import studentRoutes from './routes/student.js';
import workRoutes from './routes/work.js';

const app= express();
const port= process.env.PORT;
// const CONNECTION_URL= process.env.CONNECTION_URL;

// const CONNECTION_URL= "mongodb://localhost:27017/aryan-db";
app.use(bodyParser.json({limit: '30mb',  extended: true}));
app.use(bodyParser.urlencoded( {limit: '30mb', extended: true}))
app.use(cors());



//mongodb connection
mongoose.set("strictQuery", true);
mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>{
        console.log("Connection successful");
    })
    .catch((err)=>{
        console.log("Not connected");
        console.log(err);
    })


app.use("/auth/", authRoutes);
app.use("/student/", studentRoutes);
app.use("/work/", workRoutes);

app.listen(port, (err)=>{
    console.log(`Server is listening at port ${port}`);
})
