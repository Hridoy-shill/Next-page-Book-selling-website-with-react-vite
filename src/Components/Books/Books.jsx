import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingelBook from '../SingelBook.jsx/SingelBook';
// https://api.itbook.store/1.0/new
const Books = () => {
    const  books = useLoaderData();
    // console.log(books.books);
    const allBooks = books.books
    // console.log(allBooks);
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 mx-auto gap-5 mt-20 lg:px-8 px-5'>
            {
                allBooks.map(book => <SingelBook key={book.isbn13} book ={book}></SingelBook>)
            }
        </div>
    );
};

export default Books;