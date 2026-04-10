import express from 'express';
import History from '../models/History.js';

const router = express.Router();

router.get('/:userId', async (req, res) => {
    try {
        const history = await History.find({ user: req.params.userId }).sort({ createdAt: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const historyData = req.body;
        const newHistory = await History.create(historyData);
        res.status(201).json(newHistory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;
