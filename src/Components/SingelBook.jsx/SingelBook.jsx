import React from 'react';
import { Link } from 'react-router-dom';

const SingelBook = ({ book }) => {
    // console.log(book);
    const { image, price, subtitle, title, isbn13, url } = book;
    return (
        <Link to={`/book/${isbn13}`} className='border-1 shadow-xl hover:shadow-2xl rounded-md overflow-hidden relative transition duration-200 transform hover:-translate-y-2'>
            <img className='object-cover w-full mx-auto' src={image} alt="Book cover photo" />
            <div className='bg-black text-white bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-300 p-6 flex flex-col'>
                <p className='text-xl font-bold'>{title}</p>
                <p className='mt-16 text-slate-300'>{subtitle.substring(0, 45)}...</p>
                <p className='font-semibold mt-auto'>{price}</p>
            </div>
        </Link>
    );
};

export default SingelBook;