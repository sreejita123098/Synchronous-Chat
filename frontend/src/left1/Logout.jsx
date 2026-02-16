import axios from 'axios';
import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function logout ()  {
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:5107/user/logout");
      console.log("Logout successful:", response.data);
      localStorage.removeItem("messenger");
      setAuthUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  }
  
  return (
    <div className="p-2 w-[3%] border border-gray-300 bg-slate-900 text-white flex flex-col justify-end pb-4">
      <button 
        className="px-2 py-2 text-3xl rounded-lg duration-300 hover:bg-red-600 hover:text-white transition" 
        onClick={handleLogout}
        title="Logout"
      >
        <RiLogoutBoxLine />
      </button>
    </div>
  )
}
export default logout