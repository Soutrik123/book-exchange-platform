const pool = require('../config/db');

const addBook = async (req, res) => {
    const { title, author, genre, condition, availability } = req.body;
    const userId = req.user.id;

    try {
        const result = await pool.query(
            'INSERT INTO books (user_id, title, author, genre, condition, availability) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [userId, title, author, genre, condition, availability]
        );
        res.status(201).json({ book: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: 'Error adding book' });
    }
};

const getBooks = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM books');
        res.status(200).json({ books: result.rows });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching books' });
    }
};

module.exports = { addBook, getBooks };
