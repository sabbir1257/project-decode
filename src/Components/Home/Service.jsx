import React, { useEffect, useState } from 'react';
import ServiceSingleCard from './ServiceSingleCard';

const Service = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch("/Service.json")
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    return (
        <div className='text-center pt-28 pb-7 bg-[#E9FBF8] '>
            <h1 className='mb-6 text-5xl font-black'>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
            <p className='mb-12'>tempor invidunt ut labore et.</p>
            <div>
                {
                    carts.map((singleCard , i) => <ServiceSingleCard key={i} singleCard={singleCard} />)
                }
            </div>
        </div>
    );
};

export default Service;