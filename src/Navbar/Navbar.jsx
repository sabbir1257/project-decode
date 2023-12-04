import React, { useState } from 'react';
import logo from "../assets/nav-logo.png"
import { Link } from 'react-router-dom';
import { IoCloseSharp, IoMenu } from 'react-icons/io5';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navLink = [
        { name: "Home", link: "/" },
        { name: "Service", link: "/" },
        { name: "Case", link: "/" },
        { name: "DeCode Specialists", link: "/" },
        { name: "Blog", link: "/" },
    ]

    return (
        <div className='w-full px-3 text-center'>
            <div className='md:h-[84px] flex items-center justify-between'>

                {/* logo  */}
                <Link to="/"><img src={logo} alt="" /></Link>

                {/* res navbar toggle  */}
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {
                            open === true ? <IoCloseSharp /> : <IoMenu />
                        }
                    </span>
                </div>

                {/* navbar link  */}
                <ul className={`md:md:ml-[660px] gap-5 text-[16px] md:flex font-normal duration-500 absolute md:static bg-slate-700 md:bg-white text-white md:text-gray-800 pb-4 md:p-0 rounded w-full md:items-center  ${open ? 'top-5' : 'top-[-490px]'}`}>
                    {
                        navLink.map((link) => (
                            <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))
                    }
                    
                    {/* navbar btn  */}
                        <button className='bg-[#7BC0E3] rounded-lg text-white p-4 md:ml-20'><Link to="/">Request a quote</Link></button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;