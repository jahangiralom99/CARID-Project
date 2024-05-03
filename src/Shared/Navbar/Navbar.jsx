import logo from '../../../public/logo.png'
import { useState } from 'react';
import './NavDrawer.css'
import NavDrawer from './NavDrawer';
import { NavLink } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";



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
                <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

                    {/* menu and logo code  */}

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

                    {/* search bar code  */}

                    <div className='col-span-2 hidden md:block'>
                        <form className="max-w-md mx-auto">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block h-[8vh] w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            </div>
                        </form>
                    </div>
                    {/* select your vehicale code  */}
                    <div className='flex justify-center sm:hidden lg:block'>
                        <NavLink className="btn glass bg-[#EEF1F9]">
                            <svg className='text-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M240 114h-29.51l-43.9-43.9a13.94 13.94 0 0 0-9.9-4.1H44.28a14 14 0 0 0-11.65 6.23L3 116.67A6 6 0 0 0 2 120v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h69.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M42.62 78.89a2 2 0 0 1 1.66-.89h112.41a2 2 0 0 1 1.41.59L193.52 114H19.21ZM64 194a18 18 0 1 1 18-18a18 18 0 0 1-18 18m128 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30 30 0 0 0-58.8 0H93.4a30 30 0 0 0-58.8 0H16a2 2 0 0 1-2-2v-42h226a2 2 0 0 1 2 2Z"></path></svg>
                            <h6>Select Your Vehicle</h6>
                        </NavLink>
                    </div>
                    {/* login page and cart page code  */}
                    <div className="flex justify-end items-center  space-x-6 rtl:space-x-reverse">
                        <NavLink to='/login'><VscAccount className='text-[1.5rem]' /></NavLink>
                        <NavLink to='/cart'><BsCart3 className='text-[1.5rem]' /></NavLink>
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
            <nav className="bg-gray-50 dark:bg-gray-700 block lg:hidden  ">
                <div className='flex justify-center'>
                    <NavLink className="btn glass">
                        <svg className='text-[1.5rem]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M240 114h-29.51l-43.9-43.9a13.94 13.94 0 0 0-9.9-4.1H44.28a14 14 0 0 0-11.65 6.23L3 116.67A6 6 0 0 0 2 120v48a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h69.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-40a14 14 0 0 0-14-14M42.62 78.89a2 2 0 0 1 1.66-.89h112.41a2 2 0 0 1 1.41.59L193.52 114H19.21ZM64 194a18 18 0 1 1 18-18a18 18 0 0 1-18 18m128 0a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30 30 0 0 0-58.8 0H93.4a30 30 0 0 0-58.8 0H16a2 2 0 0 1-2-2v-42h226a2 2 0 0 1 2 2Z"></path></svg>
                        <h6>Select Your Vehicle</h6>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;