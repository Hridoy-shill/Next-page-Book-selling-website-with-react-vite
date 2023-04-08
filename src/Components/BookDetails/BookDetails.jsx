import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const BookDetails = () => {

    const bookDetails = useLoaderData()
    console.log(bookDetails);
    const { authors, price, image, rating, title, year, publisher, desc } = bookDetails
    const [fold, setFold] = useState(true)

    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='grid lg:grid-cols-2 border-2 w-5/6 mx-auto mt-20 rounded items-center mb-20'>
            <div className=''>
                <img className='w-full' src={image} alt="" />
            </div>

            <div className='w-full p-5'>
                <p className='bg-yellow-400 p-1 w-28 text-center font-bold rounded-2xl text-sm'>BRAND NEW</p>
                <h2 className='text-5xl font-bold mt-5'>{title}</h2>
                <div className='my-7'>
                    <p className='text-base font-semibold'>Author: {authors}</p>
                    <p className='text-base font-semibold'>Publisher: {publisher}</p>
                    <p className='text-base font-semibold'>Year: {year}</p>
                    <p className='text-base font-semibold'>Rating: {rating}</p>
                </div>

                {fold ?
                    (
                        <>
                            <p className='text-slate-500 font-semibold'>{desc.substring(0, 100)}
                                <span onClick={() => setFold(!fold)} className=' text-blue-500'>...Read More</span>
                            </p>
                        </>
                    )
                    :
                    (
                        <>
                            <p className='text-slate-500 font-semibold'>{desc}
                                <span onClick={() => setFold(!fold)} className=' text-blue-500'>...Read Less</span>
                            </p>
                        </>
                    )
                }

                <div className='lg:flex items-center mt-8'>
                    <button className='bg-blue-400 text-xl text-white rounded font-bold px-5 py-3'>Buy Now</button>
                    <p className='font-bold text-slate-500 lg:ml-6 mt-3 lg:mt-0 text-xl'>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;