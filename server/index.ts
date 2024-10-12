import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config();
import connectDb from './config/dbConfig.ts'
import userRoutes from "./routes/userRoutes.ts";
//mongodb database
 connectDb()
const app = express();

// for parsing application/json
app.use(express.json({ limit: "30mb", extended: true }))
// for parsing application/x-www-form-urlencoded /form data
app.use(express.urlencoded({ limit: "30mb", extended: true }))

//enabling helmet
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))

//enabling cors
app.use(cors())

//enables us to se logs in our terminal
app.use(morgan('tiny')) //used to log request from the frontend
//get cookies
app.use(cookieParser())


const port = process.env.PORT || 5000;



//routes



app.use('/api/v1/users', userRoutes)




app.listen(port, () => {
    console.log(`server running on port ${port}`)
})