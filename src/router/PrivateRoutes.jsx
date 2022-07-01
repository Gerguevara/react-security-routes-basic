import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

//     Este high order component verifica el estado si
//     usuairo esta logado este retorna el componente que sera
//     otro hight order componentes con las rutas
//     sino retorna el nabivigate al login

export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return (logged )? children : <Navigate to="login" />;
};
