import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function GuestLayout() {
  const { token, role } = useStateContext();
  const navigate = useNavigate();

  const handleClickLogin = () => {
    if (token && role) {
      debugger;
      switch (role) {
        case "Ucenik":
          navigate("/ucenik-home");
          break;
        case "Profesor":
          navigate("/profesor-home");
          break;
        case "Roditelj":
          navigate("/roditelj-home");
          break;
    
      }
    }
  };

  if (token) {
    return <Outlet />;
  }

  return (
    <div style={{ height: '100vh' }}>
      <Outlet />
      <button id="Login" onClick={handleClickLogin}>
        Uloguj se
      </button>
    </div>
  );
}
