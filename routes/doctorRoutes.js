const express = require("express");
const { getAllDoctors, createDoctor, updateAppointmentStatus, getDoctorAppointments } = require("../controllers/doctorController");

const router = express.Router();

router.get("/doctors", getAllDoctors);
router.post("/doctors", createDoctor);
router.get("/doctors/:doctorId/appointments", getDoctorAppointments); 
router.patch("/doctors/:doctorId/appointments/:appointmentId/:status", updateAppointmentStatus);

module.exports = router;
