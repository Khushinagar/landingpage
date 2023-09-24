import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const ProtectedRouter = ({isAuthenticated, children}) => {
    
    if(!isAuthenticated){
        return <Navigate to={"/profile"}/>
    }

  return children?children:<Outlet />;
}

export default ProtectedRouter