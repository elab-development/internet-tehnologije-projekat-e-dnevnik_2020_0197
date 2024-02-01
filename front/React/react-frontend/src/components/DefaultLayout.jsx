/*import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import NavigacioniMeni from '../views/NavigacioniMeni';

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

*/
       
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import NavigacioniMeni from '../views/NavigacioniMeni';


const DefaultLayout = ({ children }) => {
  const { token } = useStateContext();

  // Ako nemamo token, preusmerimo korisnika na stranicu za prijavu
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    
    <div>
      <div id="navigacioni-meni">
        <NavigacioniMeni />
      </div>
      <div id="glavni-sadrzaj">
        {children}
      </div>
      <Outlet/>
    </div>

  );
};

export default DefaultLayout;
