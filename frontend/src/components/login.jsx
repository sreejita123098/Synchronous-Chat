import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';


function Login() {
  const {authUser,setAuthUser}=useAuth();
   const {
    register,
    handleSubmit,
    
    formState: { errors }
  } = useForm();
   const onSubmit = (data) =>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
      confirmpassword:data.confirmpassword
    };

    axios
    .post("http://localhost:5107/user/login",userInfo)
    .then((response)=>{
      console.log(response.data);
      if(response.data){
      alert("login successful! ");}
    localStorage.setItem("messenger",JSON.stringify(response.data));
    setAuthUser(response.data);
    })
    .catch((error)=>{
      if(error.response){

      console.log("There was an error!",error);
      alert("login failed "+ error.response.data.message);
      }
    });
  };

  



  return (
    <>
    <div className='flex justify-center items-center mx-auto my-40'>
    <form  onSubmit={handleSubmit(onSubmit)}
    className="  px-4 pt-4 pb-4 py-4 rounded-lg  bg-blue-300 justify-center items-center gap-4 margin-auto">
        <h1 className="text-3xl text-blue-800">Messenger</h1>
        <h1>Login with your Account</h1>
        <br></br>
        <div className="  justify-center items-center  w-80 space-y-2 ">
           

<label className="input validator">
  <svg className="h-[1em] opacity-50" viewBox="0 0 24 24">
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
  <input type="email" placeholder="email@gmail.com"  {...register("email", { required: true, })}
   />
</label>
{errors.email && (
  <span className="text-red-600 text-sm font-semibold">This field is required
  </span>
)}
  

<div className="validator-hint hidden">Enter valid email address</div>

<label className="input validator">
  <svg className="h-[1em] opacity-50" viewBox="0 0 24 24">
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
{errors.password && (
<span className="text-red-600 text-sm font-semibold">This field is required

</span>)}
</div>
<br></br>

<button className="w-full btn btn-primary space-y-3">Login</button>


       
    
    
    <div className='py-2'>Don't have any Account? <Link to={"/signup"}className='text-blue-700 cursor-pointer underline'> _Sign up_ </Link> </div>
    </form>
    </div>
    </>
  )
}

export default Login;