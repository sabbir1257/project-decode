import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const ServiceSingleCard = ({ singleCard }) => {
    const { id, name, details, img } = singleCard;
    return (
        <div className='px-8 py-11 w-[60%] bg-[#FDFDFF] my-5 border-t-4 rounded border-[#60E1CB]'>
            <img className='pb-9' src={img} alt="" />
            <h1 className='pb-4 text-2xl font-semibold'>{name}</h1>
            <p className='pb-8'>{details}</p>
            <button><Link className='flex items-center gap-2 text-[#7BC0E3]' to="/">Read More <GoArrowRight />
            </Link></button>
        </div>
    );
};

export default ServiceSingleCard;