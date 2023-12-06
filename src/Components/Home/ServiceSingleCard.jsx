import React from 'react';

const ServiceSingleCard = ({singleCard}) => {
    const {id , name} = singleCard;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default ServiceSingleCard;