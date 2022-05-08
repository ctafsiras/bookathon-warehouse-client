import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InventoryCase from '../Inventory/InventoryCase';
import Banner from '../Shared/Banner';
import FAQ from '../Shared/FAQ';
import WarehouseFeature from '../Shared/WarehouseFeature';
import Loading from '../UtilityCompo/Loading';

const Homepage = () => {
    //load 6 items in the homepage
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('https://bookathon-warehouse-server.herokuapp.com/items/6')
            .then(data => setItems(data.data))
    })
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='my-4 pt-4'>Our Featured Inventories</h2>
                <div className='container'>
                    {
                        items[0] ?
                            <Row xs={1} md={3} className="g-4">
                                {
                                    items.map(item => (
                                        <InventoryCase key={item._id} item={item}>
                                        </InventoryCase>
                                    ))
                                }
                            </Row> :
                            <Loading></Loading>
                    }
                    <Link to='/inventories'><Button className='my-3' variant='dark'>Manage Inventories</Button></Link>
                </div>
            </div>
            <WarehouseFeature></WarehouseFeature>
            <FAQ></FAQ>
        </div>
    );
};

export default Homepage;