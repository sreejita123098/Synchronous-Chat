import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';




 function Signup() {
  const {authUser,setAuthUser}=useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const password=watch("password", "");
  const Confirmpassword=watch("confirmpassword"," ");
  const validatepasswordMatch = (value) => {
    return value===password || "Passwords do not match";
  };

  const onSubmit = async(data) =>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
      confirmpassword:data.confirmpassword
    };

    await axios
    .post("http://localhost:5107/user/signup",userInfo)
    .then((response)=>{
      console.log(response.data);
      if(response.data){
      alert("Signup successful! you can login now");}
    localStorage.setItem("messenger",JSON.stringify(response.data));
    setAuthUser(response.data);
    })
    .catch((error)=>{
      if(error.response){

      console.log("There was an error!",error);
      alert("Signup failed "+error.response.data.error);
      }
    });
  };

    
  

  return (
    <>
    
    <div className='justify-center items-center mx-auto my-20'>
    <form className="  px-4 pt-4 pb-4 py-4 rounded-lg  bg-blue-200 justify-center items-center gap-4 margin-auto"
    onSubmit={handleSubmit(onSubmit)}>
        
        <h1 className="text-2xl text-blue-700">Messenger</h1>
        <h1>Create Your Account </h1><br></br>
        <div className="  justify-center items-center  w-80 space-y-2 ">
            <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
    required
    placeholder="Username"
    title="Only letters, numbers or dash"
     {...register("fullname", { required: true })}
  />
</label>
{errors.fullname&& <span>This field is required</span>}

<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input 
  type="email" 
  placeholder="mail56@site.com" 
  pattern='[a-z0-9._%+-]+@gmail\\.com'
  required 
   {...register("email", { required: true, })}
   />
</label>
{errors.email && <span>This field is required</span>}
<div className="validator-hint hidden">Enter valid email address</div>
<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    required
    placeholder="Password"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
    title="Should include number, lowercase letter, uppercase letter and should contain more than 3 characters"
   {...register("password", { required: true })}/>
</label>
{errors.password && <span>This field is required</span>}
<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="Confirmpassword"
    required
    placeholder="Confirm Password"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
    title=" should include number, lowercase letter, uppercase letter and should contain more than 3 characters"
    
   {...register("confirmpassword", { required: true,
    validate:validatepasswordMatch
    }
    
   )}/>
</label>
{errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
<button className="w-full btn btn-primary  ">Sign Up</button>

<div >Have any Account? <Link to={"/login"} className='text-blue-700 cursor-pointer underline'> _login_ </Link> </div>
        </div>
    
    
    
    </form>
    </div>
  
    
    </>
  )

 }
export default Signup;