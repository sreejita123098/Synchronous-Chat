import jwt from "jsonwebtoken";

const createTokenAndsavecookie = (userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"7d",
    })
    //save in cookie
    res.cookie("jwt",token,{
        httpOnly:true,// protects from xss attack'
        secure:true,
        sameSite:"strict" //csrf attack protection
    });


}
export default createTokenAndsavecookie