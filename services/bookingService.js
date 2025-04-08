const Booking = require("../models/booking");

// In-memory storage
const bookings = [];

class BookingService {
  getAllBookings() {
    return bookings;
  }

  getBookingById(id) {
    return bookings.find((booking) => booking.id === id);
  }

  createBooking(bookingData) {
    const newBooking = new Booking(bookingData);
    bookings.push(newBooking);
    return newBooking;
  }

  updateTimesheetStatus(id, action) {
    const booking = this.getBookingById(id);
    if (!booking) return null;

    booking.timesheetStatus = action === "approve" ? "Approved" : "Rejected";
    return booking;
  }
}

module.exports = new BookingService();
