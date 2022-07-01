import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

//     Este high order component verifica el estado si
//     usuairo esta logado este retorna el componente que sera
//     otro hight order componentes con las rutas
//     sino retorna el nabivigate al login

export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const {pathname, search} = useLocation(AuthContext);
  // guarda el lastPath en local storage
  const lastPath = pathname + search
  localStorage.setItem('lastpath', lastPath);
  return (logged )? children : <Navigate to="login" />;
};
