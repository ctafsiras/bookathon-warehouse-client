import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import InventoryCase from '../Inventory/InventoryCase';
import Banner from '../Shared/Banner';
import CustomerReview from '../Shared/CustomerReview';
import FAQ from '../Shared/FAQ';
import Location from '../Shared/Location';
import WarehouseFeature from '../Shared/WarehouseFeature';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2>Our Inventory</h2>
                <div className='container'>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 6 }).map((_, idx) =><InventoryCase></InventoryCase> )}
                    </Row>
                </div>
            </div>
            <WarehouseFeature></WarehouseFeature>
            <FAQ></FAQ>
        </div>
    );
};

export default Homepage;