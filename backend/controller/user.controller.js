import User from "../models/user.model.js";

export const signup=(req,res)=>{
   try{ const{fullname,email,password,confirmpassword}=req.body;
    if(password!=confirmpassword){
        return res.status(400).json({message:"password does not matches"});
    }
    const user=User.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists"});
    }
    const newuser=new User({
        fullname,
        email,
        password,
    });newuser
    .save()
    .then(()=>{
        res.status(201).json({message:"registration successful"});
    })}
    catch(error){
        console.log(error);
        res.status(500).json({message:"registration failed due to server error"})
    }
};
