import React, { createContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const jwtToken = Cookies.get("jwt");
  const storedUser = localStorage.getItem("messenger");

  const [authUser, setAuthUser] = useState(
    storedUser ? JSON.parse(storedUser) : jwtToken ? jwtToken : undefined
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

