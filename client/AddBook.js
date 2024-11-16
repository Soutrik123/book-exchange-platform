import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [formData, setFormData] = useState({ title: '', author: '', genre: '', condition: '', availability: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/books', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Book added successfully');
        } catch (error) {
            alert('Error adding book');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
            <input type="text" name="author" placeholder="Author" onChange={handleChange} />
            <input type="text" name="genre" placeholder="Genre" onChange={handleChange} />
            <input type="text" name="condition" placeholder="Condition" onChange={handleChange} />
            <input type="text" name="availability" placeholder="Availability" onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;