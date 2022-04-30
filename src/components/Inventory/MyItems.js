import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import InventoryCase from './InventoryCase';

const MyItems = () => {
    const [user]=useAuthState(auth)
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/myItems?email=${user.email}`)
            .then(data => setItems(data.data))
    })
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:4000/deleteItems/${id}`)
            .then(data => console.log(data))

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