import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../UtilityCompo/Loading';
import SocialLogin from './SocialLogin';


// register user form and function 
const Register = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        createUserWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (

        <div style={{ maxWidth: '400px' }} className='mx-auto'>

            <Form onSubmit={handleRegister}>
                <Form.Group className="my-3">
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" name='email' placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {loading && <Loading></Loading>}
                {error && <p>{error.message}</p>}
                <Button className='w-100 mb-3' variant="dark" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have account? <Link className='text-primary my-3' to='/login'>Login Now</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;