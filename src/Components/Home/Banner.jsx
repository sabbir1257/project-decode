import React from 'react';
import hero from "../../assets/hero-img.png"
const Banner = () => {
    return (
        <div className='items-center justify-between px-3 md:pl-64 md:flex'>
            <div>
                <p className='border-2 border-[#7BC0E3] w-[18%] mb-6'></p>
                <h1 className='text-6xl font-black mb-7'>We help you create  your <span className='text-[#60E1CB]'>website</span></h1>
                <p className='text-[#000000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis <br /> adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. <br /> At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
                <div className='flex gap-4 mt-14'>
                    <button className='px-4 py-2 bg-[#60E1CB] text-white rounded-full'>Get Started</button>
                    <button className='px-4 py-2 border-2 border-[#60E1CB] rounded-full'>Contact Us</button>
                </div>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;