import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../UtilityCompo/Loading';


// social login with google added 
const SocialLogin = () => {
    let navigate = useNavigate();
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <hr />
            {loading && <Loading></Loading>}
            {error && <p>{error.message}</p>}
            <Button onClick={() => signInWithGoogle()} variant='dark'>Google Sign In</Button>
        </div>
    );
};

export default SocialLogin;