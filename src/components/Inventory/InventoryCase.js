import React, { Children } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InventoryCase = ({ children, item }) => {
    const { itemName, description, supplierName, imgURL, price, quantity } = item;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{quantity} </Card.Text>
                    <Card.Text>{supplierName}</Card.Text>
                </Card.Body>
                <Button variant='success' className='my-3' as={Link} to='/inventory/sffs'>Manage</Button>
                {children}
            </Card>
        </Col>
    );
};

export default InventoryCase;