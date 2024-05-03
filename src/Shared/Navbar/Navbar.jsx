import logo from '../../../public/logo.png'
import { useState } from 'react';
import './NavDrawer.css'
import NavDrawer from './NavDrawer';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navLink = <>
        <li>
            <NavLink to='' className="text-gray-900 md:text-[16px] dark:text-white hover:underline" aria-current="page">Parts</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 md:text-[16px] dark:text-white hover:underline">Wheels & Tires</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 md:text-[16px] dark:text-white hover:underline">Exterior</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 md:text-[16px] dark:text-white hover:underline">Lighting</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 md:text-[16px] dark:text-white hover:underline"> Body Parts</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 md:text-[16px] dark:text-white hover:underline">Interior</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 dark:text-white hover:underline"> Audio & Electronics</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 dark:text-white hover:underline"> Automotive Tools</NavLink>
        </li>
        <li>
            <NavLink to='' className="text-gray-900 dark:text-white hover:underline"> Specialty Shops</NavLink>
        </li>
    </>

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className='sm:block :hidden '>
                            <button className="toggle-btn btn btn-square btn-ghost " onClick={toggleDrawer}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </button>
                            <NavDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
                        </div>
                        <img src={logo} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </div>
                    <div>
                        
                    </div>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a to='' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 hidden lg:block ">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center justify-around">
                        <ul className="  lg:flex lg:flex-row lg:font-medium  lg:gap-[1.5rem] lg:mt-0 lg:space-x-8 lg:rtl:space-x-reverse lg:text-sm  ">
                            {navLink}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;