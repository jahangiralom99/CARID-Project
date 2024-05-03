import logo from '../../../public/logo.png'
import NavLink from './NavLink';


const Navbar = () => {


    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        
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