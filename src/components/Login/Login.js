import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
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
    return (

        <div style={{ maxWidth: '400px' }} className='mx-auto'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="my-3">

                    <Form.Control type="email" name='email' placeholder="Enter Email" required />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>


                {loading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
                <Button className='w-100' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;