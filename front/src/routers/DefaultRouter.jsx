import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

import Login from '../components/login';
import Signup from '../components/Signup';
import AccesOk from '../components/AccesOk';
import Reportes from "../components/Reportes/Reportes";
import ConsultasAbiertas from '../components/ConsultasAbiertas';
import ConsultasCerradas from '../components/ConsultasCerradas';

const DefaultRouter = createBrowserRouter([
    {
      path:"/",
      element: < Login />,
    },
    {
      path:"/signup",
      element: < Signup />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path:"/AccesOk",
          element: < AccesOk />,
        },
        {
          path:"/Reportes",
          element: < Reportes />,
        },
        {
          path:"/ConsultasAbiertas",
          element: < ConsultasAbiertas/>,
        },
        {
          path:"/ConsultasCerradas",
          element: < ConsultasCerradas/>,
        }
      ]
    },
  ]);

export default DefaultRouter