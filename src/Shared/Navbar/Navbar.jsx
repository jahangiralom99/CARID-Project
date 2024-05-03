import logo from '../../../public/logo.png'
import { useState } from 'react';
import NavLink from './NavLink';
import './Drawer.css';
import './NavDrawer.css'
import NavDrawer from './NavDrawer';


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <button className="toggle-btn btn btn-square btn-ghost sm:block lg:hidden " onClick={toggleDrawer}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <NavDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
                        <img src={logo} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </div>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a to='' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 sm:hidden md:block ">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center justify-around">
                        <NavLink />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;