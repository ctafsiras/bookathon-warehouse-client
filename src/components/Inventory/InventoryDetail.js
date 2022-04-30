import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:4000/items/${id}`)
            .then(data => setItem(data.data[0]))
    })
    const { _id, itemName, description, supplierName, imgURL, price, quantity } = item;
    const handleDelivered = () => {
        axios.put(`http://localhost:4000/items/${id}?quantity=${quantity - 1}`)
            .then(data => console.log(data))
    }
    const handleAddStock = (e) => {
        e.preventDefault();
        const newStock = parseInt(e.target.stock.value);
        if (newStock > 0) {
            const parseQuantity = parseInt(quantity);
            const newQuantity = newStock + parseQuantity;
            axios.put(`http://localhost:4000/items/${id}?quantity=${newQuantity}`)
                .then(data => console.log(data))
        }
    }
    return (
        <div className='container' style={{ maxWidth: '600px' }}>
            <Card>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{quantity} </Card.Text>
                    <Card.Text>{supplierName}</Card.Text>
                </Card.Body>

            </Card>
            <div className='ms-auto my-3'>
                <Button disabled={quantity < 1 ? true : false} onClick={handleDelivered}>Delivered</Button>
            </div>
            <h2>ReStock Item</h2>
            <Form onSubmit={handleAddStock}>
                <Form.Group className="mb-3">
                    <Form.Control type="number" name='stock' placeholder="Enter Stock" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link to='/inventories'><Button className='my-3' variant='dark'>Manage Inventories</Button></Link>
        </div>
    );
};

export default InventoryDetail;