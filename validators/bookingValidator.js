class BookingValidator {
  validateCreateBooking(data) {
    const errors = [];

    if (!data.jobRole) errors.push("jobRole is required");
    if (!data.location) errors.push("location is required");

    if (!data.date) {
      errors.push("date is required");
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
      errors.push("date must be in YYYY-MM-DD format");
    }

    if (!data.startTime) {
      errors.push("startTime is required");
    } else if (!/^\d{2}:\d{2}$/.test(data.startTime)) {
      errors.push("startTime must be in HH:MM format");
    }

    if (!data.endTime) {
      errors.push("endTime is required");
    } else if (!/^\d{2}:\d{2}$/.test(data.endTime)) {
      errors.push("endTime must be in HH:MM format");
    }

    return errors;
  }

  validateTimesheetAction(data) {
    const errors = [];

    if (!data.action) {
      errors.push("action is required");
    } else if (!["approve", "reject"].includes(data.action)) {
      errors.push('action must be either "approve" or "reject"');
    }

    return errors;
  }
}

module.exports = new BookingValidator();
