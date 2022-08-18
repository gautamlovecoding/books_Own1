import express from 'express'
const router = express.Router()

import registerUser from '../controllers/userController.js'

////////////////////////// -USER APIS- //////////////////////////////
router.post('/register', registerUser);


export default router