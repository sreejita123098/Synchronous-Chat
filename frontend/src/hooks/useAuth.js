import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";

// custom hook to access auth context
export const useAuth = () => useContext(AuthContext);
