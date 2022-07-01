import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";


const initStateFromLS= () => {
const user = JSON.parse(localStorage.getItem("user"));

return { 
  logged: !!user,
  user: user
 }
}

export const AuthProvider = ({ children }) => {
  // (use reducer pide el reducer y el initialState)
  const [authState, dispatch] = useReducer(authReducer, { }, initStateFromLS);

  // no se pone el despatch directamente porque no todos los componentes
  //deberian tener permiso o deche de disparar el login, por ello es mejor
  //pasar funciones como el OnLogin
  const login = (name = "") => {
    const user = { id: 'ABC', name }
    const action = { type: types.login, payload: user }
    localStorage.setItem('user' , JSON.stringify(user))
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  }

  // nota se manda authState desetructurado que tiene propiedades del user y logged
  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// tips
// Value inicial se puede dejar como objeto vacio
