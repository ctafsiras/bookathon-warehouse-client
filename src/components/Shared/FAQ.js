import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='my-3 container'>
            <h2>Frequently Asked Questions</h2>
            <Row sm={1} md={2} className="d-md-flex d-block align-items-center">
            <Col>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is our location?</Accordion.Header>
                        <Accordion.Body>
                            We have different branches, but our head office is located at Mirpur, section 1, dhaka.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How order on our warehouse</Accordion.Header>
                        <Accordion.Body>
                            You don't need to do extra job, just contact with us we will done rest of the work.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is the pricing?</Accordion.Header>
                        <Accordion.Body>
                            Right now we are providing complete free of service. it's a summer offer for all of you.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
            <Col className=''>
                <img className='w-100' src="https://sell.g2.com/hubfs/FAQ.png" alt="" />
            </Col>
        </Row>
        </div>
    );
};

export default FAQ;