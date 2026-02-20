# Healthcare Appointment System - Backend

Node.js + Express + PostgreSQL backend for healthcare appointment management.

## Setup Instructions

### 1. Install PostgreSQL

Download and install PostgreSQL from: https://www.postgresql.org/download/

### 2. Create Database

Open PostgreSQL command line (psql) and run:
```sql
CREATE DATABASE healthcare_db;
```

### 3. Install Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment

Edit the `.env` file with your PostgreSQL credentials:
```
DB_USER=postgres
DB_PASSWORD=your_postgres_password
```

### 5. Run Database Migration

```bash
npm run migrate
```

This will create all tables and insert sample data.

### 6. Start Server

```bash
npm run dev
```

Server will run on http://localhost:5000

## Sample Login Credentials

- **Admin**: admin@healthcare.com / admin123
- **Doctor**: dr.smith@healthcare.com / doctor123
- **Patient**: patient@test.com / patient123

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login

### Appointments
- GET `/api/appointments/doctors` - Get all doctors
- GET `/api/appointments/slots` - Get available slots
- POST `/api/appointments` - Book appointment
- GET `/api/appointments` - Get user appointments
- PATCH `/api/appointments/:id/cancel` - Cancel appointment

### Reports
- POST `/api/reports` - Upload medical report
- GET `/api/reports/patient/:patientId` - Get patient reports
- GET `/api/reports/:id/download` - Download report

## Project Structure

```
backend/
├── config/
│   └── database.js          # Database connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── appointmentController.js
│   └── reportController.js
├── database/
│   ├── schema.sql           # Database schema
│   └── migrate.js           # Migration script
├── middleware/
│   ├── auth.js              # JWT authentication
│   └── upload.js            # File upload handling
├── routes/
│   ├── authRoutes.js
│   ├── appointmentRoutes.js
│   └── reportRoutes.js
├── .env                     # Environment variables
├── server.js                # Main server file
└── package.json
```

## Technologies Used

- **Express.js** - Web framework
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **Nodemailer** - Email notifications (optional)
