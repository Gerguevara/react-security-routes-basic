import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

//     Este high order component verifica el estado si
//     usuairo esta no logado este retorna el componente que sera
//     otro hight order componente especificamente la pantalla
//de login, si si esta este simplmente  permite la navegacion a
//login

export const PublicRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return (!logged) ? children : <Navigate to="/dc" />;
};
