import { Link } from "react-router-dom";

const NavLink = () => {
    return (
        <ul className="flex flex-row font-medium  gap-[1.5rem] mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline" aria-current="page">Parts</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline">Wheels & Tires</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline">Exterior</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline">Lighting</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline"> Body Parts</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline">Interior</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline"> Audio & Electronics</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline"> Automotive Tools</Link>
            </li>
            <li>
                <Link to='' className="text-gray-900 dark:text-white hover:underline"> Specialty Shops</Link>
            </li>
        </ul>
    );
};

export default NavLink;