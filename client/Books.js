import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/api/books');
                setBooks(response.data.books);
            } catch (error) {
                alert('Error fetching books');
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
};

export default Books;