/*import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function RoditeljLayout(){
    const {user, role, token}=useStateContext()

    if(!token){

        return <Navigate to="/login"/>
    }else if (role !== "roditelj") {
        return <Navigate to="/login" />;
      }

    return (
        <div>
   
        </div>
        
        )}*/