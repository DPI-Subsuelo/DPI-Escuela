import { Outlet, Navigate } from 'react-router-dom' 
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const usuario = useSelector((state) => state.persona.usuario);

  return usuario.auth ? <Outlet /> : <Navigate to="/" />; 
}

export default ProtectedRoute