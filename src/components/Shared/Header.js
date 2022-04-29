import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/bookathon-warehouse-logo.png'

const Header = () => {
    const [user]=useAuthState(auth)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand className='me-auto' as={Link} to='/'>
                    <img src={logo} className='w-50 my-0' alt="" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/'>Features</Nav.Link>
                    {
                        user ?
                        <button onClick={()=>signOut(auth)}>Sign Out</button>:
                        <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;