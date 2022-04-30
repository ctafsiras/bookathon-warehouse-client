import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventoryItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = e => {
        e.preventDefault()
        const itemName = e.target.name.value;
        const description = e.target.description.value;
        const supplierName = e.target.supplierName.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const imgURL = e.target.imgURL.value;
        const email = user.email;
        const data = { itemName, email, description, supplierName, price, quantity, imgURL };
        axios.post('http://localhost:4000/items', data);
        e.target.reset();
    }
    return (
        <div style={{ maxWidth: '400px' }} className="mx-auto">
            <h2>Add Inventory Item</h2>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3">
                    <Form.Control name='name' type="text" placeholder="Enter Book Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='description' as="textarea" rows={3} type="text" placeholder="Description" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='supplierName' type="text" placeholder="Enter Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='price' type="number" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='quantity' type="number" placeholder="Enter Quantity" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control name='imgURL' type="text" placeholder="Image URL" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default AddInventoryItem;