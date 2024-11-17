const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
require('dotenv').config();
const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
            [email, hashedPassword]
        );
        res.status(201).json({ user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Query the database for the user
        console.log(req.body);
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        console.log(user)

        if (!user.rows.length) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the entered password with the stored hash
        const isMatch = await bcrypt.compare(password, user.rows[0].password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        process.env.JWT_SECRET = "R4nD0m!Pa$$w0rd123456789&Secure@KeyForJWT";
        const token = jwt.sign({ id: user.rows[0].id },process.env.JWT_SECRET  , { expiresIn: '1h' });
        res.status(200).json({token});
    } catch (err) {
        console.error('Error during login:', err.message); // Log the error message
        console.error('Error stack trace:', err.stack);  // Log the stack trace for debugging

        // Send a detailed error message in the response
        res.status(500).json({
            error: 'Error logging in',
            message: err.message,  // Include the error message
            stack: err.stack  // Include the stack trace for debugging (optional for production)
        });
    }
};


module.exports = { register, login };
