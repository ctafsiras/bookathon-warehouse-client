import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo/bookathon-warehouse-logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar bg="light" variant="light" expand='lg'>
            <Container>
                <Navbar.Brand className='me-auto' as={Link} to='/'>
                    <img src={logo} className='w-50 my-0' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                    {
                        user && <Nav.Link as={Link} to='/inventories'>Manage Inventories</Nav.Link>
                    }
                    {
                        user && <Nav.Link as={Link} to='/addItem'>Add Item</Nav.Link>
                    }
                    {
                        user && <Nav.Link as={Link} to='/myItems'>My Items</Nav.Link>
                    }
                    {
                        user ?

                            <Button variant='dark' onClick={() => signOut(auth)}>Sign Out</Button> :
                            <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;