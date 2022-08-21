import express from 'express'
const router = express.Router()

import { registerUser, loginUser } from '../controllers/userController.js'
import { createBooks } from '../controllers/booksController.js'

////////////////////////// -USER APIS- //////////////////////////////
router.post('/register', registerUser);
router.post('/login', loginUser);


////////////////////////// -BOOK APIS- //////////////////////////////
router.post('/books', createBooks);

export default router