const mongoose = require("mongoose");
const Doctor = require("../models/doctorModel");

// Book Appointment 
exports.bookAppointment = async (req, res) => {
    const { doctorId } = req.params;
    const { patientName, date } = req.body;

    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) return res.status(404).json({ message: "Doctor not found!" });

    
        const appointment = {
            _id: new mongoose.Types.ObjectId(),
            patientName,
            date,
            status: "Pending"
        };

        doctor.appointments.push(appointment);
        await doctor.save();

        res.status(201).json({
            message: "Appointment booked successfully!",
            appointment
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
