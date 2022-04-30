import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import security from '../../images/service-feature/security.png'
import fastdelivery from '../../images/service-feature/fast-delivery.png'
import authentication from '../../images/service-feature/authentication.png'

const WarehouseFeature = () => {
    const pic=[security, fastdelivery, authentication]
    return (
        <div>
            <div>
                <h2>We are best for...</h2>
            </div>
            <div className='container'>
                    <Row xs={1} md={3} className="g-4">
                      
                            <Col>
                                <Card>
                                    <Card.Img className='w-50 mx-auto py-3' variant="top" src={security} />
                                    <Card.Body>
                                        <Card.Title>Super Security</Card.Title>
                                        <Card.Text>
                                            We provide in our warehouse the best security system with 24 hours in 7 days CC camera observation. so that your item be secure and safe in our warehouse.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img className='w-50 mx-auto py-3' variant="top" src={authentication} />
                                    <Card.Body>
                                        <Card.Title>Authenticate</Card.Title>
                                        <Card.Text>
                                            Every personnel in our warehouse working is very secure and safe, their identiy always confirmed before every day working schedule. we keep your item safe from every evil probability.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img className='w-50 mx-auto py-3' variant="top" src={fastdelivery} />
                                    <Card.Body>
                                        <Card.Title>Super Fast Delivery</Card.Title>
                                        <Card.Text>
                                            The biggest issue of Online shopping is delivery issue, though we are not eccomerce service, but for our client we always provide super fast delivery system.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                       
                    </Row>
                </div>
        </div>
    );
};

export default WarehouseFeature;