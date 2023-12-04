import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#60E1CB] w-full py-20'>
            <div className='grid md:grid-cols-7 border-b-4'>
                <div className='col-span-3'>
                    <h1>Logo</h1>
                    <p>Far far away, behind the word mountains, far from <br /> the countries Vokalia and Consonantia</p>
                </div>
                <div>
                    <h1>Work</h1>
                    <ul>
                        <li><Link>Blog</Link></li>
                        <li><Link>How We Work</Link></li>
                        <li><Link>Testimonials</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Services</h1>
                    <ul>
                        <li><Link>Marketing Strategy</Link></li>
                        <li><Link>Website Optimization</Link></li>
                        <li><Link>Email Maerketing</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Business Solution</h1>
                    <ul>
                        <li><Link>Partnership</Link></li>
                        <li><Link>About Project</Link></li>
                        <li><Link>Corporate</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Language</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;