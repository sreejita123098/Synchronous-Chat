import React from 'react'
import Left from './home/left/left'
import Right from './home/right/right'
import Logout from './left1/logout' 
import Signup from './components/signup'
import Login from './components/login'
import { useAuth } from './hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

function App() {
  const {authUser,setAuthUser}=useAuth();
  console.log(authUser);
  return (
    
    <>
    <Routes>
      <Route path="/" element={
        authUser?(<div className="flex h-screen w-sceen">
          <Logout></Logout>
          <Left></Left>
          <Right></Right>
        </div>):
        (
          
          <Navigate to={"/login"}/>
        )
      }
      />
      <Route 
      path="/login" 
      element={authUser?<Navigate to={"/"}/>:<Login/>}
      />
      <Route 
      path="/signup" 
      element={authUser?<Navigate to={"/"}/>:<Signup/>}
      />


      
    </Routes>
    </>
  );
}

export default App;