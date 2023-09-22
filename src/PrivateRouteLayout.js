import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { projectAuth } from './pages/firebase';

const PrivateRouteLayout = () => {
const location = useLocation();
  return  projectAuth.currentUser ?(<Outlet />) : 
  (<Navigate to="/profile" state={{from : location}} replace/>)
};

export default PrivateRouteLayout