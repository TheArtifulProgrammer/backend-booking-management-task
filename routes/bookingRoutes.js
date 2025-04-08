const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// GET /bookings
router.get("/", bookingController.getAllBookings);

// POST /bookings
router.post("/", bookingController.createBooking);

// POST /bookings/:id/timesheet
router.post("/:id/timesheet", bookingController.updateTimesheetStatus);

module.exports = router;
