import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Mock login/register to keep it simple as requested (local auth)
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, age, gender, medicalHistory } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ name, email, password, age, gender, medicalHistory });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password }); // No bcrypt for simplicity here, but can be added
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
