import React, { lazy } from "react";
import Loadable from "../layouts/loadable";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

const BlankLayout = Loadable(
  lazy(() => import("../layouts/full-layout/BlankLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/home")));

const JugadoresView = Loadable(lazy(() => import("../pages/Jugadores/Jugadores")));

const JugadoresInfo = Loadable(lazy(() => import("../pages/Jugadores/JugadorInfo")));

const ImplementosView = Loadable(lazy(() => import("../pages/Implementos/implementos")));

const ImplementosInfo = Loadable(lazy(() => import("../pages/Implementos/implementos"))); 

const SociosView = Loadable(lazy(() => import("../pages/Socios/socios")));  

const SociosInfo = Loadable(lazy(() => import("../pages/Socios/SocioInfo")));

const CreateSocio = Loadable(lazy(() => import("../pages/Agregar_Socio/sociosdatos")));

const CreateJugador = Loadable(lazy(() => import("../pages/Agregar_Jugadores/jugadoresdatos")));

const CreateImplemento = Loadable(lazy(() => import("../pages/Agregar_Implementos/ingresoimplementos")));

const UserProfile = Loadable(lazy(() => import("../pages/Users/usuario")));

const LoginUser = Loadable(lazy(() => import("../pages/Login/login")));

const UserType = Loadable(lazy(() => import("../pages/Login/Users")));

const DeudaView = Loadable(lazy(() => import("../pages/Deuda/deuda")));
/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", element: <PrivateRoute><HomePage /></PrivateRoute> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <privateRoute><Error /></privateRoute> },
      { path: "jugadores", element: <PrivateRoute><JugadoresView /></PrivateRoute> },
      { path: "jugadores/:id", element: <JugadoresInfo /> },
      { path: "implementos", element: <ImplementosView /> },
      { path: "implementos/:id", element: <ImplementosInfo /> },
      { path: "socios", element: <PrivateRoute><SociosView /></PrivateRoute> },
      { path: "socios/:id", element: <PrivateRoute><SociosInfo /></PrivateRoute> },
      { path: "socios/agregar", element: <PrivateRoute><CreateSocio /></PrivateRoute> },
      { path: "jugadores/agregar", element: <PrivateRoute><CreateJugador /></PrivateRoute> },
      { path: "implementos/agregar", element: <CreateImplemento /> },
      { path: "usuario", element: <UserProfile /> },
      { path: "deuda", element:<PrivateRoute> <DeudaView /></PrivateRoute> },
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      { path: "LoginSocio", element: <LoginUser /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error />},
      { path: "LoginAdmin", element: <LoginUser /> },
      { path: "/portal", exact: true, element: <UserType /> },
      

    ],
  },
];

export default Router;