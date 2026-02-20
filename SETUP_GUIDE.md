# 🚀 Quick Setup Guide - Healthcare Appointment System

## Step-by-Step Installation

### Step 1: Install PostgreSQL

1. Download PostgreSQL from: https://www.postgresql.org/download/
2. Install with default settings
3. Remember your postgres password during installation

### Step 2: Create Database

Open **pgAdmin** or **psql** command line and run:

```sql
CREATE DATABASE healthcare_db;
```

Or using command line:
```bash
psql -U postgres
CREATE DATABASE healthcare_db;
\q
```

### Step 3: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Edit .env file with your PostgreSQL password
# Change DB_PASSWORD=postgres to your actual password

# Run database migration (creates tables and sample data)
npm run migrate

# Start backend server
npm run dev
```

✅ Backend should now be running on http://localhost:5000

### Step 4: Setup Frontend (Open New Terminal)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start frontend server
npm start
```

✅ Frontend should open automatically at http://localhost:3000

## 🎉 You're Done!

### Test the Application

1. Open http://localhost:3000 in your browser
2. Login with test credentials:
   - **Patient**: patient@test.com / patient123
   - **Doctor**: dr.smith@healthcare.com / doctor123

### What You Can Do:

**As Patient:**
- Book appointments with doctors
- View your appointments
- Upload medical reports
- Cancel appointments

**As Doctor:**
- View scheduled appointments
- See patient details

## 🐛 Common Issues

### Issue: Database connection failed
**Solution:** 
- Make sure PostgreSQL is running
- Check password in `backend/.env`
- Verify database exists: `psql -U postgres -l`

### Issue: Port 5000 already in use
**Solution:** 
- Change PORT in `backend/.env` to 5001
- Update proxy in `frontend/package.json` to http://localhost:5001

### Issue: Port 3000 already in use
**Solution:** 
- React will ask if you want to use another port (3001)
- Type 'Y' and press Enter

### Issue: npm install fails
**Solution:**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## 📱 Project Demo Flow

1. **Register** as a new patient
2. **Login** with your credentials
3. **Browse doctors** by specialty
4. **Select a doctor** and view available slots
5. **Book an appointment** for a future date
6. **View your appointments** in the dashboard
7. **Upload a medical report** (PDF or image)
8. **Cancel an appointment** if needed

## 📊 Database Tables Created

After migration, you'll have:
- ✅ users (authentication)
- ✅ patients (patient profiles)
- ✅ doctors (doctor profiles with 2 sample doctors)
- ✅ doctor_schedules (Mon-Fri, 9 AM - 5 PM)
- ✅ appointments (booking records)
- ✅ medical_reports (file uploads)
- ✅ prescriptions
- ✅ notifications
- ✅ audit_logs

## 🎓 For Your College Presentation

### Key Features to Highlight:
1. **Full-stack architecture** (React + Node.js + PostgreSQL)
2. **Secure authentication** (JWT + Bcrypt)
3. **Real-time slot booking** (prevents double booking)
4. **File upload system** (medical reports)
5. **Role-based access** (Patient, Doctor, Admin)
6. **Responsive design** (works on mobile)

### Technical Concepts Demonstrated:
- RESTful API design
- Database normalization
- Authentication & Authorization
- File handling
- React hooks & routing
- State management
- Form validation
- Error handling

## 📞 Need Help?

If you face any issues:
1. Check if both servers are running
2. Check browser console for errors (F12)
3. Check terminal for error messages
4. Verify database connection

---

**Good luck with your college project! 🎓**
