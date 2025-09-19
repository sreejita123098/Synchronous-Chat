import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const app = express()
const PORT=process.env.PORT || 5000
const URI=process.env.MONGODB_URI;

app.get('/', (req, res) => {
  res.send('hello chatapp')
})

try{
    mongoose.connect(URI);
    console.log("connected to mongoDB");
}catch(error){
    console.log(error);
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
