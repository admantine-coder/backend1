const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    date: { type: Date, required: true },
    status: { type: String, default: "Pending" } 
});

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    contact: { type: String, required: true },
    appointments: [appointmentSchema]
});

module.exports = mongoose.model("Doctor", doctorSchema);
