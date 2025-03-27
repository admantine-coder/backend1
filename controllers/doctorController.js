const Doctor = require("../models/doctorModel");

// sara doctor ka details
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//sara doctor ka appointment
exports.getDoctorAppointments = async (req, res) => {
    const { doctorId } = req.params;

    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found!" });
        }

        res.status(200).json({ appointments: doctor.appointments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// new doctor add karna ka liya
exports.createDoctor = async (req, res) => {
    const { name, specialization, contact } = req.body;

    try {
        const newDoctor = new Doctor({ name, specialization, contact });
        await newDoctor.save();
        res.status(201).json({ message: "Doctor added successfully!", doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// appoint approved ya phir reject karna ka liya 
exports.updateAppointmentStatus = async (req, res) => {
    const { doctorId, appointmentId, status } = req.params;

    try {
        const doctor = await Doctor.findById(doctorId);
        const appointment = doctor.appointments.id(appointmentId);
        if (!appointment) return res.status(404).json({ message: "Appointment not found!" });

        appointment.status = status;
        await doctor.save();

        res.json({ message: `Appointment ${status} successfully!` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
