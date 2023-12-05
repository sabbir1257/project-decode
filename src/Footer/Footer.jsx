import React from 'react';
import { Link } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";


const Footer = () => {
    return (
        <div className='bg-[#60E1CB] w-full py-20 md:px-[250px] px-3'>
            <div className='grid items-center pb-12 border-b-2 md:grid-cols-7'>
                <div className='md:col-span-3'>
                    <h1 className='mb-10 text-3xl font-black'>Logo</h1>
                    <p>Far far away, behind the word mountains, far from <br /> the countries Vokalia and Consonantia</p>
                </div>
                <div>
                    <h1 className='text-[19px] font-bold mb-7'>Work</h1>
                    <ul>
                        <li className='mb-2 text-[#292525]'><Link>Blog</Link></li>
                        <li className='mb-2 text-[#292525]'><Link>How We Work</Link></li>
                        <li className='mb-2 text-[#292525]'><Link>Testimonials</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[19px] font-bold mb-7'>Services</h1>
                    <ul>
                        <li className='mb-2 text-[#292525]'><Link>Marketing Strategy</Link></li>
                        <li className='mb-2 text-[#292525]'><Link>Website Optimization</Link></li>
                        <li className='mb-2 text-[#292525]'><Link>Email Maerketing</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[19px] font-bold mb-7'>Business Solution</h1>
                    <ul>
                        <li className='mb-2 text-[#292525]'><Link>Partnership</Link></li>
                        <li className='mb-2 text-[#292525]'><Link>About Project</Link></li>
                        <li className='mb-2 text-[#292525]'><Link>Corporate</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[19px] font-bold mb-28 pb-2 flex items-center gap-3'>Language <GoChevronDown />
                    </h1>
                </div>
            </div>
            <div className='flex justify-between pt-12'>
                <div>
                    <p>© DaCode. 2020</p>
                </div>
                <div className='flex gap-5'>
                    <p>FB</p>
                    <p>TW</p>
                    <p>IG</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;