import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import symptomRoutes from './routes/symptomRoutes.js';
import doctorRoutes from './routes/doctorRoutes.js';
import historyRoutes from './routes/historyRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/history', historyRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
