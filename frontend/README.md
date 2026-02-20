# Healthcare Appointment System - Frontend

React-based frontend for the healthcare appointment management system.

## Setup Instructions

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm start
```

The app will open at http://localhost:3000

## Features

### For Patients:
- Register and login
- Search and filter doctors by specialty
- View doctor profiles with fees and qualifications
- Book appointments with available time slots
- View upcoming and past appointments
- Cancel appointments
- Upload medical reports securely

### For Doctors:
- Login to dashboard
- View scheduled appointments
- See patient details
- Manage appointment schedule

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── MyAppointments.jsx
│   │   └── UploadReport.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **CSS3** - Styling

## Test Credentials

- **Patient**: patient@test.com / patient123
- **Doctor**: dr.smith@healthcare.com / doctor123

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
