import {} from 'dotenv/config'

import express from 'express'
import route from './route/route.js'
import connectdb from './db/connectdb.js'
import multer from 'multer'
import bodyParser from 'body-parser'



const app = express()
app.use(bodyParser.json())
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL

//Database Connection
connectdb(DATABASE_URL)

//Load Routes
app.use('/', route)



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})