import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* podriamos definir otro set de rutas publicas */}
        <Route
          path="login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
      {/* si quisieramos otra ruta publica
        <Route path="register" element={
        <PublicRoutes>
          <LoginPage/>
        </PublicRoutes>} /> */}

        {/* private routes */}
        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};


// otra forma para tua publicas

// <Route path="login/*" element={
//   <PublicRoute>
//     {/* <LoginPage /> */}
//     <Routes>
//       <Route path="/*" element={<LoginPage />} />
//     </Routes>
//   </PublicRoute>
// }
// />