import React from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    return (
        <div className='container' style={{ maxWidth: '600px' }}>
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

            </Card>
            <div className='ms-auto my-3'>
                <Button >Delivered</Button>
            </div>
            <form >
                <h2>Item Restock</h2>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter Item Amount"
                    />
                    <Button variant="dark">
                        Add Item
                    </Button>
                </InputGroup>

            </form>
            <Link to='/inventories'><Button className='my-3' variant='dark'>Manage Inventories</Button></Link>
        </div>
    );
};

export default InventoryDetail;