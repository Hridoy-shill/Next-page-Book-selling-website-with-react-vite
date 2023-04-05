import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-100 py-5 px-9 flex justify-between'>
            <Link to={'/'} className='flex items-center'>
                <BoltIcon className='w-7 h-7 text-sky-600'></BoltIcon>
                <p className='text-xl font-bold ms-1'>nextPage</p>
            </Link>

            <div>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink to={'/'} className={({isActive}) => (isActive ? 'text-sky-600 text-xl duration-300 font-bold' : 'font-bold hover:text-sky-400 text-gray-500 duration-500')}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/books'} className={({isActive}) => (isActive ? 'text-sky-600 text-xl duration-300 font-bold' : 'font-bold hover:text-sky-400 text-gray-500 duration-500')}>Books</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/about'} className={({isActive}) => (isActive ? 'text-sky-600 text-xl duration-300 font-bold' : 'font-bold hover:text-sky-400 text-gray-500 duration-500')}>About us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;