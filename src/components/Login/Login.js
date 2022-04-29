import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../UtilityCompo/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();

  
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
        

    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (

        <div style={{ maxWidth: '400px' }} className='mx-auto'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="my-3">

                    <Form.Control type="email" name='email' placeholder="Enter Email" required />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>


                {loading && <Loading></Loading>}
                {error && <p>{error.message}</p>}
                <Button className='w-100' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;