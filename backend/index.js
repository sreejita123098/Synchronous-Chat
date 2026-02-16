import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './routes/user.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';




dotenv.config();

// Create Express server
const app = express(); // converting to express app
app.use(express.json()); // middleware to parse json data from request body
app.use(cors());
app.use(cookieParser());
const PORT=process.env.PORT || 5000
const URI=process.env.MONGODB_URI;

app.get('/', (req, res) => {
  res.send('hello chatapp');
})

try{
    mongoose.connect(URI);
    console.log("connected to mongoDB");
}catch(error){
    console.log(error);
}

app.use("/user",userRoute); //using middleware

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
