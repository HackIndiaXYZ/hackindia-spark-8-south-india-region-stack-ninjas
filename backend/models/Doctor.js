import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    hospital: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String },
    availability: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
