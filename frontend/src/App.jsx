import React from 'react'
import Left from './home/left/left'
import Right from './home/right/right'
import Logout from './left1/logout' 
import Signup from './components/signup'
import Login from './components/login'
import { useAuth } from './hooks/useAuth'

function App() {
  const {authUser,setAuthUser}=useAuth();
  console.log(authUser);
  return (
    
    <>
    <div className="flex h-screen w-screen">
         {/*<Logout></Logout>
        <Left></Left>
        
        <Right></Right>*/} 
        {/*<Login></Login>*/}
        <Signup></Signup> 


      </div>
      
   
    </>
  )
}

export default App;