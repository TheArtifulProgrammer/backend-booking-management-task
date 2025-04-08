const bookingService = require("../services/bookingService");
const bookingValidator = require("../validators/bookingValidator");

class BookingController {
  getAllBookings(req, res) {
    const bookings = bookingService.getAllBookings();
    return res.status(200).json(bookings);
  }

  createBooking(req, res) {
    const validationErrors = bookingValidator.validateCreateBooking(req.body);

    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    const newBooking = bookingService.createBooking(req.body);
    return res.status(201).json(newBooking);
  }

  updateTimesheetStatus(req, res) {
    const { id } = req.params;
    const validationErrors = bookingValidator.validateTimesheetAction(req.body);

    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    const updatedBooking = bookingService.updateTimesheetStatus(
      id,
      req.body.action
    );

    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    return res.status(200).json(updatedBooking);
  }
}

module.exports = new BookingController();
