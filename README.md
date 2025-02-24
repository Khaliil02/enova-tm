🚀 Enova Ticket Manager

Enova Ticket Manager is a web-based application designed to streamline ticket management between departments. Built with Node.js, Express, and PostgreSQL, it provides an efficient way to manage users, tickets, and departments.

📌 Features

User Management: Create and manage users seamlessly.

Ticketing System: Track and update ticket statuses.

Department Control: Organize and manage departments efficiently.

📖 Table of Contents

Installation

Configuration

Usage

API Endpoints

⚙️ Installation

Clone the repository:

git clone https://github.com/Khaliil02/Enova-Ticket-Manager.git
cd Enova-Ticket-Manager/back

Install dependencies:

npm install

Set up the PostgreSQL database and configure your .env file.

🔧 Configuration

Create a .env file in the back directory with the following:

PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=khalil
DB_NAME=enova_db
DB_PORT=5432

▶️ Usage

Start the server:

npm start

The server will run on: http://localhost:5000

📡 API Endpoints

🔹 Users

GET /api/users → Retrieve all users

POST /api/users → Create a new user

🔹 Tickets

GET /api/tickets → Retrieve all tickets

POST /api/tickets → Create a new ticket

PUT /api/tickets/:id/status → Update a ticket status

🔹 Departments

GET /api/departments → Retrieve all departments

GET /api/departments/:id → Retrieve a department by ID

POST /api/departments → Create a new department

PUT /api/departments/:id → Update a department

DELETE /api/departments/:id → Delete a department

