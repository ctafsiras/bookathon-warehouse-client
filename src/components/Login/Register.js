import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../UtilityCompo/Loading';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        createUserWithEmailAndPassword(email, password);


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
                <Button className='w-100' variant="dark" type="submit">
                    Register
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;