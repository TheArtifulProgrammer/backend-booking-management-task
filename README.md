# BACKEND BOOKING MANAGEMENT

A lightweight REST API that supports booking and timesheet approval flow with in-memory storage.

## Setup Instructions

1. Clone this repository `https://github.com/TheArtifulProgrammer/backend-booking-management-task.git`
2. Open the directory `backend-booking-management-task`
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`

The server will run on <http://localhost:8000>

## API Endpoints

### 1. GET /bookings

Returns a list of all bookings.

**Example request:**

```bash
curl -X GET http://localhost:8000/bookings
```

### 2. POST /bookings

Creates a new booking.

**Example request:**

```bash
curl -X POST http://localhost:8000/bookings \
    -H "Content-Type: application/json" \
    -d '{
        "jobRole": "Nurse",
        "location": "London",
        "date": "2025-04-07",
        "startTime": "09:00",
        "endTime": "17:00"
    }'
```

### 3. POST /bookings/:id/timesheet

Updates the timesheet status of a booking.

**Example request:**

```bash
curl -X POST http://localhost:8000/bookings/[booking-id]/timesheet \
    -H "Content-Type: application/json" \
    -d '{
        "action": "approve"
    }'
```

## Running the Application

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. The API will be available at <http://localhost:8000>
