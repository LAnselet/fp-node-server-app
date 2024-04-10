// packages
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

// utils
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port: ${process.env.PORT}`)
);
