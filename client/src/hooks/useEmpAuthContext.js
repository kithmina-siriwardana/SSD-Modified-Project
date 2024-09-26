import { AuthContext } from "../context/EmpAuthContext";
import { useContext } from "react";

export const useEmpAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}