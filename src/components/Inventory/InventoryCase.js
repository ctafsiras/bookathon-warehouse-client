import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InventoryCase = () => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Itme Name</Card.Title>
                    <Card.Text>
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>prcie</Card.Text>
                    <Card.Text>quantity </Card.Text>
                    <Card.Text>supplier name</Card.Text>
                </Card.Body>
                <Button as={Link} to='/inventory/sffs'>Manage</Button>
            </Card>
        </Col>
    );
};

export default InventoryCase;