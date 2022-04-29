import React from 'react';
import { Col, Row } from 'react-bootstrap';

const CustomerReview = () => {
    return (
        <div >
            <h2>Customer Review</h2>
            <Row sm={1} md={2}>
                <Col className='p-4'>
                <img className='rounded-pill' src="https://p.kindpng.com/picc/s/252-2524695_dummy-profile-image-jpg-hd-png-download.png" alt="" />
            <h4>Shamim Mridha</h4>
            <p>This is really nice experience with bookathon warehouse. there service is very productive and their worker are very helpful to all.</p>
                </Col>
                <Col className='p-4'>
                
                <img src="https://p.kindpng.com/picc/s/252-2524695_dummy-profile-image-jpg-hd-png-download.png" alt="" />
            <h4>Shamim Mridha</h4>
            <p>This is really nice experience with bookathon warehouse. there service is very productive and their worker are very helpful to all.</p>
            </Col>
            </Row>
        </div>
    );
};

export default CustomerReview;