import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InventoryCase from './InventoryCase';

const ManageInventories = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://bookathon-warehouse-server.herokuapp.com/items')
            .then(data => setItems(data.data))
    })
    const handleDelete = (id) => {
        const permission = window.confirm('Are You sure?')
        if (permission) {
            axios.delete(`https://bookathon-warehouse-server.herokuapp.com/deleteItems/${id}`)
                .then(data => console.log(data))
        }

    }
    return (
        <div>
            <h2>Manage All Inventories</h2>
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

export default ManageInventories;