import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InventoryCase from '../Inventory/InventoryCase';
import Banner from '../Shared/Banner';
import FAQ from '../Shared/FAQ';
import WarehouseFeature from '../Shared/WarehouseFeature';

const Homepage = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/items/6')
            .then(data => setItems(data.data))
    })
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2>Our Inventory</h2>
                <div className='container'>
                <Row xs={1} md={3} className="g-4">
                    {
                        items.map(item => (
                            <InventoryCase key={item._id} item={item}>
                                </InventoryCase>
                        ))
                    }
                </Row>
                    <Link to='/inventories'><Button className='my-3' variant='dark'>Manage Inventories</Button></Link>
                </div>
            </div>
            <WarehouseFeature></WarehouseFeature>
            <FAQ></FAQ>
        </div>
    );
};

export default Homepage;