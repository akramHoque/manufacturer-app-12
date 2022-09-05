import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import Loading from '../Shared/Loading/Loading';


const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();


    if (loading) {
        return <Loading></Loading>
    }
    
    if (!user) {
        toast.error('Plz register!')
        return <Navigate to="/signup" state={{from:location}} replace></Navigate>
    }
    //  if (admin) {
    //     toast.error('Sorry! you are not allowed to access this page!')
    //     return <NotAccess></NotAccess>;
    // }

    return children;
};

export default RequireAuth;