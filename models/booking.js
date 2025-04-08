const { v4: uuidv4 } = require("uuid");

class Booking {
  constructor(data) {
    this.id = uuidv4();
    this.jobRole = data.jobRole;
    this.location = data.location;
    this.date = data.date;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.timesheetStatus = "Pending";
  }
}

module.exports = Booking;
