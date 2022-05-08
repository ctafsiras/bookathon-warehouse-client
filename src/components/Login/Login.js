import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../UtilityCompo/Loading';
import SocialLogin from './SocialLogin';


// login function 
const Login = () => {
    const [email, setEmail] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleLogin = async e => {
        e.preventDefault();
        const mail = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(mail, password)
        const { data } = await axios.post('https://bookathon-warehouse-server.herokuapp.com/login', { mail });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }
    // send reset pass function 
    const [sendPasswordResetEmail, sending, sendError] = useSendPasswordResetEmail(auth);
    if (user) {

        // navigate(from, { replace: true });
    }
    const sendResetCode = () => {
        sendPasswordResetEmail(email);
        // added a toast for reset email sending 
        toast('Verification Email Sent!')
    }

    return (

        <div style={{ maxWidth: '400px' }} className='mx-auto'>
            <ToastContainer></ToastContainer>
            <Form onSubmit={handleLogin}>
                <Form.Group className="my-3">
                    <Form.Control  onBlur={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {loading && <Loading></Loading>}
                {error && <p>{error.message}</p>}
                <Button className='w-100 mb-3' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Forget Password? <span className='text-primary my-3' onClick={sendResetCode}>Reset Password</span></p>
            <p>Don't have account? <Link className='text-primary my-3' to='/register'>Register Now</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;