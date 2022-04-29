import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {id}=useParams();
    return (
        <div>
            <h2>Detail of: {id}</h2>
        </div>
    );
};

export default InventoryDetail;