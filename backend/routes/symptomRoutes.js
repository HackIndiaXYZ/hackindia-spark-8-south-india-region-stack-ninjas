import express from 'express';
// In a real app, this would use a Python microservice or ML model.
// Here we use dummy logic for demonstration.

const router = express.Router();

const analyzeSymptoms = (symptoms) => {
    const criticalSymptoms = ['chest pain', 'shortness of breath', 'severe bleeding', 'unconsciousness'];
    const highRisk = symptoms.some(s => criticalSymptoms.includes(s.toLowerCase()));

    if (highRisk) {
        return {
            diseases: [{ name: 'Possible Heart Attack / Critical Condition', severity: 'High', confidence: 95 }],
            actionSuggested: 'EMERGENCY: Visit the nearest hospital immediately or call 108.'
        };
    } else if (symptoms.includes('fever') && symptoms.includes('body ache')) {
        return {
            diseases: [{ name: 'Viral Fever / Dengue', severity: 'Medium', confidence: 80 }],
            actionSuggested: 'Consult a General Physician and stay hydrated.'
        };
    } else {
        return {
            diseases: [{ name: 'Common Cold / Mild Infection', severity: 'Low', confidence: 70 }],
            actionSuggested: 'Take adequate rest and monitor your temperature.'
        };
    }
};

router.post('/analyze', (req, res) => {
    try {
        const { symptoms } = req.body;
        if (!symptoms || symptoms.length === 0) {
            return res.status(400).json({ message: 'No symptoms provided' });
        }
        const result = analyzeSymptoms(symptoms);
        res.json(result);
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
});

export default router;
