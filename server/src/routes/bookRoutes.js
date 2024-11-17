const express = require('express');
const { addBook, getBooks } = require('../controllers/bookController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/',authenticate, addBook);
router.get('/', getBooks);

module.exports = router;
