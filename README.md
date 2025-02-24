# Enova Ticket Manager

Enova Ticket Manager is a web application for managing tickets, users, and departments. It is built using Node.js, Express, and PostgreSQL.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   (sh)
   git clone https://github.com/Khaliil02/Enova-Ticket-Manager.git
   cd Enova-Ticket-Manager/back
2. Install dependencies:
   npm install
3. Set up the PostgreSQL database and update the .env file with your database credentials.

## Configuration
Create a .env file in the back directory with the following content:

PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=khalil
DB_NAME=enova_db
DB_PORT=5432

## Usage
1. Start the server:
  npm start
2. The server will run on http://localhost:5000.

## API Endpoints
1. Users
  GET /api/users: Retrieve all users.
  POST /api/users: Create a new user.
2. Tickets
  GET /api/tickets: Retrieve all tickets.
  POST /api/tickets: Create a new ticket.
  PUT /api/tickets/:id/status: Update the status of a ticket.
3. Departments
  GET /api/departments: Retrieve all departments.
  GET /api/departments/:id: Retrieve a specific department by ID.
  POST /api/departments: Create a new department.
  PUT /api/departments/:id: Update a department by ID.
  DELETE /api/departments/:id: Delete a department by ID.
