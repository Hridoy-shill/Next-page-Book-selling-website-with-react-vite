import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingelBook from '../SingelBook.jsx/SingelBook';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
// https://api.itbook.store/1.0/new
const Books = () => {
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }
    const books = useLoaderData();
    // console.log(books.books);
    const allBooks = books.books
    // console.log(allBooks);
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 mx-auto gap-5 mt-20 lg:px-8 px-5'>
            {
                allBooks.map(book => <SingelBook key={book.isbn13} book={book}></SingelBook>)
            }
        </div>
    );
};

export default Books;