import React from 'react';
import {Navigate} from 'react-router-dom'






function RequireAuth({ children }) {
    const isAuth = localStorage.getItem('isAuth');
    return isAuth ? children : <Navigate to="/login" replace />;
}
export default RequireAuth;