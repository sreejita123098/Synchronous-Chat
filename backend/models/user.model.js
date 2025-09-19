import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{type:string,require:true},
    email:{type:string,require:true ,unique:true,lowercase:true },
    password:{type:string,require:true},
    confirmpassword:{type:string,require:true},
},
    {
    timestamp:true,
    }
);
const user=mongoose.model("user",userSchema);
export default user;