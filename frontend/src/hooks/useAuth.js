import { useContext } from "react";
import { AuthContext } from "../context/Authprovider";


export const useAuth = () => useContext(AuthContext);
