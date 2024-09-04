import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: 'D:/NEU/Projects/blogApp/.env' });

// console.log('MongoDB URI:', process.env.MONGO);

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});
