import React, { Children } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InventoryCase = ({ children, item }) => {
    const { _id, itemName, description, supplierName, imgURL, price, quantity } = item;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>Writer: {supplierName}</Card.Text>
                    <Card.Text>Description: {description}</Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>Quantity: {quantity} </Card.Text>
                </Card.Body>
                <Button variant='success' className='my-3' as={Link} to={`/inventory/${_id}`}>Manage</Button>
                {children}
            </Card>
        </Col>
    );
};

export default InventoryCase;