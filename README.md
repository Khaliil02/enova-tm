# 🚀 Enova Ticket Manager

Enova Ticket Manager is a web-based ticket management system designed to streamline communication between departments. Built with **Node.js, Express, and PostgreSQL**, this platform allows users to manage tickets, departments, and user roles efficiently.

## 📌 Features

✅ User authentication and role management  
✅ Ticket creation, status updates, and tracking  
✅ Department-based ticket assignments

## 📂 Table of Contents

- [📦 Installation](#-installation)
- [⚙️ Configuration](#-configuration)
- [🚀 Usage](#-usage)
- [📡 API Endpoints](#-api-endpoints)

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Khaliil02/enova-tm.git
   cd Enova-Ticket-Manager/back
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up the PostgreSQL database** and configure environment variables.

## ⚙️ Configuration

Create a `.env` file in the **back** directory and add the following details:

```ini
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=khalil
DB_NAME=enova_db
DB_PORT=5432
```

## 🚀 Usage

1. **Start the server:**
   ```sh
   npm start
   ```
2. The server will run on **http://localhost:5000**.

## 📡 API Endpoints

### 👤 Users

- `GET /api/users` → Retrieve all users
- `GET /api/users/:id` → Retrieve a user by ID
- `POST /api/users` → Create a new user
- `PUT /api/users/:id` → Update a user
- `DELETE /api/users/:id` → Delete a user

### 🎟️ Tickets

- `GET /api/tickets` → Retrieve all tickets
- `GET /api/tickets/:id` → Retrieve a ticket by ID
- `GET /api/tickets/status/:status` → Retrieve tickets by status
- `GET /api/tickets/priority/:priority` → Retrieve tickets by priority
- `POST /api/tickets` → Create a new ticket
- `PUT /api/tickets/:id/status` → Update the status of a ticket
- `DELETE /api/tickets/:id` → Delete a ticket

### 🏢 Departments

- `GET /api/departments` → Retrieve all departments
- `GET /api/departments/:id` → Retrieve a department by ID
- `POST /api/departments` → Create a new department
- `PUT /api/departments/:id` → Update a department
- `DELETE /api/departments/:id` → Delete a department

```

```
