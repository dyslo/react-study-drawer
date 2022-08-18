import React from 'react';
import { useParams } from 'react-router-dom';

const RouteTest = () => {
    const params = useParams;
    return (
        <div>
            RootTest
        </div>
    );
};

export default RouteTest;