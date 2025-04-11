import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
app.use(cors());
app.use(express.json());

dotenv.config()
try {
    mongoose.connect("mongodb://localhost:27017/jobapplication");
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

const schema=new mongoose.Schema({

         jobtitle:String,
        companyname:String,
        location:String,
        jobtype:String,
        salaryrange:Number,
        salaryrange1:Number,
        applicationdeadline:String,
        jobdescription:String
});
const details=mongoose.model("upload",schema);


app.post("/",async(req,res)=>{

console.log(req.body);
const data=await details(res.body)
const datasave=await data.save();
res.send({message:"Upload succesfully"})
console.log(data);
})

dotenv.config();
const PORT= 4000
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
