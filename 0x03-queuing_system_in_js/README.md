# Seat Reservation System

This Seat Reservation System is a Node.js application that allows users to check the availability of seats, reserve seats, and process seat reservations. It utilizes Express.js for handling HTTP requests, Redis for data storage, and Kue for job queueing.

## Features

- **Check Available Seats**: Users can check the number of available seats.
- **Reserve Seat**: Users can reserve a seat if seats are available.
- **Queue Processing**: Automatically processes seat reservations and updates the available seats.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Redis installed and running on your system

### Installation

1. Clone the repository:

2. Navigate to the project directory:

   ```bash
   cd seat-reservation-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm run dev
   ```

2. Access the application endpoints:

   - **Check Available Seats**: [http://localhost:1245/available_seats](http://localhost:1245/available_seats)
   - **Reserve Seat**: [http://localhost:1245/reserve_seat](http://localhost:1245/reserve_seat)
   - **Process Queue**: [http://localhost:1245/process](http://localhost:1245/process)

## Routes

- **GET /available_seats**: Returns the number of available seats.
- **GET /reserve_seat**: Reserves a seat if available.
- **GET /process**: Processes the queue to update available seats.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **Redis**: In-memory data store used for caching and data storage.
- **Kue**: Priority job queueing for Node.js.
