import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import InventoryCase from './InventoryCase';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const loadMyItems = async () => {
            try {
                const { data } = await axios.get(`https://bookathon-warehouse-server.herokuapp.com/myItems?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setItems(data)
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        loadMyItems();
    }, [user])
    const handleDelete = (id) => {
        const permission = window.confirm('Are You sure?')
        if (permission) {
            axios.delete(`https://bookathon-warehouse-server.herokuapp.com/deleteItems/${id}`)
                .then(data => console.log(data))
        }
    }
    return (
        <div>
            <h2>My Items</h2>
            <div className='container'>
                <Row xs={1} md={3} className="g-4">
                    {
                        items.map(item => (
                            <InventoryCase key={item._id} item={item}>
                                <Button onClick={() => handleDelete(item._id)} variant='danger'>Delete</Button>
                            </InventoryCase>
                        ))
                    }
                </Row>
            </div>

            <Link to='/addItem'><Button className='my-3' variant='dark'>Add Item to Inventory</Button></Link>
        </div>
    );
};

export default MyItems;