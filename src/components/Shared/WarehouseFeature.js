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
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img className='w-50 mx-auto py-3' variant="top" src={authentication} />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img className='w-50 mx-auto py-3' variant="top" src={fastdelivery} />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
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