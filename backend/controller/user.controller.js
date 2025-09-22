import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndsavecookie from "../jwt/generateToken.js";


export const signup=async(req,res)=>{
   try{ const{fullname,email,password,confirmpassword}=req.body;
    if(password!=confirmpassword){
        return res.status(400).json({message:"password does not matches"});
    }
    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists",user});
    }

    //hashing the password
    const hashedPassword=await bcrypt.hash(password,10);
    //storing in db
    const newuser=await new User({
        fullname,
        email,
        password:hashedPassword,
        confirmpassword:hashedPassword
        
    });
    await newuser.save();
        if(newuser){
            createTokenAndsavecookie(newuser._id,res);
             res.status(201).json({message:"registration successful",newuser});


        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"registration failed due to server error"})
    }
};
