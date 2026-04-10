import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const specialty = req.query.specialty;
        let query = {};
        if (specialty) {
            query.specialty = { $regex: new RegExp(specialty, 'i') };
        }
        const doctors = await Doctor.find(query);
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
