const express = require("express");
const { bookAppointment } = require("../controllers/patientController");

const router = express.Router();

router.post("/doctors/:doctorId/appointments", bookAppointment);

module.exports = router;
