import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    fullname:{type:String , required:true},
    email:{type:String,required:true ,unique:true,lowercase:true },
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true},
},
    {
    timestamp:true,
    }
);
const user=mongoose.model("user",userSchema);
export default user;