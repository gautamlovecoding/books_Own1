import express from 'express'
const router = express.Router()

import { registerUser, loginUser } from '../controllers/userController.js'
import { createBooks, getBooks, getBooksById } from '../controllers/booksController.js'
import authentication from '../middleware/auth.js'

////////////////////////// -USER APIS- //////////////////////////////
router.post('/register', registerUser);
router.post('/login', loginUser);


////////////////////////// -BOOK APIS- //////////////////////////////
router.post('/books', authentication, createBooks);
router.get('/books', authentication, getBooks);
router.get('/books/:bookId', authentication, getBooksById);

export default router