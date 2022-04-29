import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='my-5'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;