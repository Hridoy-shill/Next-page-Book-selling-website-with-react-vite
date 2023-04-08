import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Lottie from "lottie-react";
import student from "../../assets/student.json";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='lg:flex items-center gap-5 w-full'>
            <div className='lg:w-3/6 p-6'>
                <p className='p-1 lg:mt-32 text-xs font-semibold rounded-full text-center bg-yellow-400 w-24'>ON SALE!</p>
                <h1 className='text-4xl font-bold mt-6'>A reader lives a <br />
                    thousand lives <span className='text-blue-400'>before he dies</span>
                </h1>
                <p className='text-slate-500 text-lg my-5'>
                    Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
                </p>
                <div className='flex items-center'>
                    <button className='bg-blue-400 hover:bg-blue-500 text-lg rounded flex font-bold text-white p-3'><Link to={'books'}>Visit Store</Link>
                    <ShoppingCartIcon className='w-7 h-7 ms-3'></ShoppingCartIcon></button>
                    <Link to={'about'} className='font-semibold text-lg ms-4 hover:text-blue-700'>learn more</Link>
                </div>
            </div>

            <div className='lg:w-3/6 w-full p-10'>
            <Lottie animationData={student} />
            </div>
        </div>
    );
};

export default Home;