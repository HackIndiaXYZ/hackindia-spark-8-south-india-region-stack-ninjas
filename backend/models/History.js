import mongoose from 'mongoose';

const historySchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    symptoms: { type: [String], required: true },
    predictedDiseases: [{
        name: String,
        severity: { type: String, enum: ['Low', 'Medium', 'High'] },
        confidence: Number
    }],
    actionSuggested: { type: String }
}, {
    timestamps: true
});

const History = mongoose.model('History', historySchema);
export default History;
