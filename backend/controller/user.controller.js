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

export const login=async(req,res)=>{
    const{email,password} =  req.body;
    try{
        
        const user=await User.findOne({email});
        const ismatch=await bcrypt.compare(password,user.password);
        if(user==false){
            return res.status(404).json({message:"user not found invalid email or password"});
        }
        if( ismatch===false){
            return res.status(404).json({message:"user not found invalid email or password"});
        }
        
        
            
            
        createTokenAndsavecookie(user._id,res);

        res.status(200).json({message:"login successful",
            user:{
            id:user._id,
            name:user.fullname,
            email:user.email,
        },
    });
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"login failed due to server error.."})
    }};

    export const logout=async(req,res)=>{
        try{
            res.clearCookie("jwt");
            res.status(200).json({message:"logout successful"});

        }catch(error){
            console.log(error);
            res.status(500).json({message:"logout failed due to server error.."})
        }
    }


    //getting user profile
    export const getUserProfile=async(req,res)=>{
        try{const allUsers=await User.find();
            res.status(201).json({allUsers});
        }
    catch(error){
        console.log("Error in controller"+error);
        res.status(500).json({message:"failed to fetch users due to server error.."})
    }}