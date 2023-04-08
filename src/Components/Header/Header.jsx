import React, { isValidElement, useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div>
            <div className='bg-slate-100 py-3 lg:px-9 px-2 flex justify-between'>
                <Link to={'/'} className='flex items-center'>
                    <BoltIcon className='w-7 h-7 text-sky-600'></BoltIcon>
                    <p className='text-xl font-bold ms-1'>nextPage</p>
                </Link>

                <div className='relative'>

                    <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden'>
                        <span>{isMenuOpen === true ?
                            <XMarkIcon className='w-7 h-7'></XMarkIcon> :
                            <Bars3BottomRightIcon className='w-7 h-7'></Bars3BottomRightIcon>}
                        </span>
                    </div>
                    <ul className={`lg:flex lg:static bg-sky-600 p-2 lg:bg-slate-100 bg-opacity-20 lg:space-x-8 space-y-2 lg:space-y-0 lg:justify-end absolute duration-500 ${isMenuOpen ? 'top-10 right-0' :'-top-32 right-0'}`}>
                        <li>
                            <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-sky-600 text-xl duration-300 font-bold' : 'font-bold hover:text-sky-400 text-gray-500 duration-500')}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/books'} className={({ isActive }) => (isActive ? 'text-sky-600 text-xl duration-300 font-bold' : 'font-bold hover:text-sky-400 text-gray-500 duration-500')}>Books</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-sky-500 text-xl duration-300 font-bold' : 'font-bold hover:text-sky-400 text-gray-500 duration-500')}>About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;