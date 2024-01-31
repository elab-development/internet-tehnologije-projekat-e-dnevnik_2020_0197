import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function DefaultLayout(){

const {user, token}=useStateContext()
 //ne mozemo pristupiti nicemu u default layout ako nemamo token
 
if(!token){

    return <Navigate to="/login"/>
}

    return (
        <div>

        <Outlet/>
        </div>
        
        )}