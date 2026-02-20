# Healthcare Appointment System - College Project

A full-stack healthcare appointment management system built with Node.js, Express, PostgreSQL, and React.

## 🎯 Features

### Patient Features
- ✅ User registration and authentication
- ✅ Search doctors by specialty
- ✅ View doctor profiles with fees and qualifications
- ✅ Book appointments with real-time slot availability
- ✅ View and manage appointments
- ✅ Upload medical reports (PDF/Images)
- ✅ Cancel appointments

### Doctor Features
- ✅ Login to dashboard
- ✅ View scheduled appointments
- ✅ See patient details
- ✅ Manage appointment schedule

### Admin Features
- ✅ System monitoring
- ✅ User management

## 🛠️ Tech Stack

### Backend
- Node.js + Express.js
- PostgreSQL (Local Database)
- JWT Authentication
- Bcrypt (Password Hashing)
- Multer (File Upload)

### Frontend
- React 18
- React Router
- Axios
- CSS3

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd healthcare-appointment-system
```

### 2. Setup Backend

```bash
cd backend
npm install
```

### 3. Configure PostgreSQL Database

Open PostgreSQL command line (psql) and create database:

```sql
CREATE DATABASE healthcare_db;
```

### 4. Configure Environment Variables

Edit `backend/.env` file with your PostgreSQL credentials:

```env
DB_USER=postgres
DB_PASSWORD=your_postgres_password
```

### 5. Run Database Migration

```bash
npm run migrate
```

This will create all tables and insert sample data.

### 6. Start Backend Server

```bash
npm run dev
```

Backend will run on http://localhost:5000

### 7. Setup Frontend (New Terminal)

```bash
cd frontend
npm install
npm start
```

Frontend will run on http://localhost:3000

## 🔐 Test Credentials

Use these credentials to test the application:

- **Admin**: admin@healthcare.com / admin123
- **Doctor**: dr.smith@healthcare.com / doctor123
- **Patient**: patient@test.com / patient123

## 📁 Project Structure

```
healthcare-appointment-system/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── appointmentController.js
│   │   └── reportController.js
│   ├── database/
│   │   ├── schema.sql
│   │   └── migrate.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── upload.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── appointmentRoutes.js
│   │   └── reportRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── BookAppointment.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   └── UploadReport.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Appointments
- `GET /api/appointments/doctors` - Get all doctors
- `GET /api/appointments/slots` - Get available time slots
- `POST /api/appointments` - Book appointment
- `GET /api/appointments` - Get user appointments
- `PATCH /api/appointments/:id/cancel` - Cancel appointment

### Reports
- `POST /api/reports` - Upload medical report
- `GET /api/reports/patient/:patientId` - Get patient reports
- `GET /api/reports/:id/download` - Download report

## 📊 Database Schema

The system includes the following tables:
- `users` - User authentication
- `patients` - Patient profiles
- `doctors` - Doctor profiles
- `doctor_schedules` - Doctor availability
- `appointments` - Appointment bookings
- `medical_reports` - Uploaded reports
- `prescriptions` - Medical prescriptions
- `notifications` - System notifications
- `audit_logs` - Activity logs

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt (12 rounds)
- Role-based access control
- File type validation
- File size limits (10MB)
- SQL injection prevention
- CORS enabled

## 📝 How to Use

### For Patients:

1. **Register**: Create account as a patient
2. **Login**: Use your credentials
3. **Book Appointment**:
   - Browse available doctors
   - Select doctor by specialty
   - Choose date and time slot
   - Confirm booking
4. **View Appointments**: Check your upcoming appointments
5. **Upload Reports**: Upload medical documents

### For Doctors:

1. **Login**: Use doctor credentials
2. **View Schedule**: See all appointments
3. **Manage Patients**: View patient details

## 🎓 College Project Notes

This project demonstrates:
- Full-stack web development
- RESTful API design
- Database design and normalization
- Authentication and authorization
- File upload handling
- React component architecture
- State management
- Responsive UI design

## 🐛 Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Verify database exists: `psql -l`

### Port Already in Use
- Backend: Change PORT in `backend/.env`
- Frontend: It will prompt to use different port

### Migration Fails
- Drop existing database: `DROP DATABASE healthcare_db;`
- Create fresh: `CREATE DATABASE healthcare_db;`
- Run migration again

## 📧 Support

For issues or questions, please create an issue in the repository.

## 📄 License

This is a college project for educational purposes.

---

**Made with ❤️ for College Project**
