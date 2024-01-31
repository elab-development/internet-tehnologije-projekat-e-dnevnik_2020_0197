import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token:null,
    role:'',
    setUser: ()=>{},
    setToken:()=>{},
})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(123);
    //localStorage.getItem("ACCESS_TOKEN")
    const [role, setRole] = useState("");

    const setTokenAndLocalStorage = (token) => {
      setToken(token);
      if (token) {
        localStorage.setItem('ACCESS_TOKEN', token);
      } else {
        localStorage.removeItem('ACCESS_TOKEN');
      }
    }
  
    const setUserAndRole = (userData) => {
      setUser(userData);
      // Uloga će biti postavljena tek kada se odabere iz combo box-a
    };
  
    const handleRoleChange = (selectedRole) => {
        //if(role){
       // }
            setRole(selectedRole);
    };
  
    return (
      <StateContext.Provider value={{
        user,
        token,
        role,
        setUser: setUserAndRole,
        setToken: setTokenAndLocalStorage,
        handleRoleChange,
      }}>
        {children}
      </StateContext.Provider>
    );
  }
  
export const useStateContext = ()=>useContext(StateContext)

