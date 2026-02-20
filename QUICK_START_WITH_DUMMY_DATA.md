# 🚀 Quick Start with Dummy Data

## Step-by-Step Setup

### 1️⃣ Install PostgreSQL
Download and install from: https://www.postgresql.org/download/windows/

### 2️⃣ Create Database
Open **pgAdmin** or **psql** and run:
```sql
CREATE DATABASE healthcare_db;
```

### 3️⃣ Update Backend Configuration
Edit `backend/.env` and set your PostgreSQL password:
```env
DB_PASSWORD=your_postgres_password
```

### 4️⃣ Run Database Migration
```bash
cd backend
npm run migrate
```

### 5️⃣ Load Dummy Data (NEW!)
```bash
npm run load-dummy
```

This will add:
- ✅ 10 Doctors (various specialties)
- ✅ 10 Patients
- ✅ 10+ Sample appointments
- ✅ Doctor schedules
- ✅ Notifications
- ✅ Prescriptions

### 6️⃣ Start Backend (Already Running!)
```bash
npm run dev
```
✅ Backend is already running on http://localhost:5000

### 7️⃣ Start Frontend
Open a **NEW terminal**:
```bash
cd frontend
npm start
```

### 8️⃣ Test the Application
Open http://localhost:3000 and login with:

**Patient Account:**
- Email: `patient@test.com`
- Password: `patient123`

**Doctor Account:**
- Email: `dr.smith@healthcare.com`
- Password: `password123`

---

## 🎯 What You Can Test

### As Patient:
1. ✅ Browse 10 different doctors
2. ✅ Filter by specialty (Cardiology, Dermatology, Pediatrics, etc.)
3. ✅ Book appointments with available slots
4. ✅ View existing appointments
5. ✅ Upload medical reports
6. ✅ Cancel appointments

### As Doctor:
1. ✅ View scheduled appointments
2. ✅ See patient details
3. ✅ Check appointment history

---

## 📋 Available Test Accounts

### Doctors (10):
1. dr.smith@healthcare.com - Cardiology
2. dr.jones@healthcare.com - Dermatology
3. dr.williams@healthcare.com - Pediatrics
4. dr.brown@healthcare.com - Orthopedics
5. dr.davis@healthcare.com - Neurology
6. dr.wilson@healthcare.com - Gynecology
7. dr.taylor@healthcare.com - ENT
8. dr.anderson@healthcare.com - Psychiatry
9. dr.thomas@healthcare.com - Ophthalmology
10. dr.jackson@healthcare.com - General Medicine

**All doctor passwords:** `password123`

### Patients (10):
1. patient@test.com (Alice Johnson) - `patient123`
2. john.doe@email.com - `password123`
3. mary.smith@email.com - `password123`
4. robert.wilson@email.com - `password123`
5. emma.brown@email.com - `password123`
6. david.lee@email.com - `password123`
7. sophia.garcia@email.com - `password123`
8. michael.martinez@email.com - `password123`
9. olivia.rodriguez@email.com - `password123`
10. william.anderson@email.com - `password123`

### Admin:
- admin@healthcare.com - `admin123`

**See `TEST_CREDENTIALS.md` for complete details!**

---

## 🔄 Reset Data (If Needed)

To start fresh:
```bash
cd backend

# Drop and recreate database
psql -U postgres
DROP DATABASE healthcare_db;
CREATE DATABASE healthcare_db;
\q

# Run migrations again
npm run migrate

# Load dummy data again
npm run load-dummy
```

---

## 📊 Sample Data Includes

### Appointments:
- **Future appointments** (scheduled) - Test booking flow
- **Past appointments** (completed) - Test history view
- **Cancelled appointments** - Test cancellation

### Doctor Schedules:
- Different time slots (20 min, 30 min, 45 min, 60 min)
- Various availability (Mon-Fri, Mon-Sat, specific days)
- Morning, afternoon, and evening slots

### Notifications:
- Appointment reminders
- Booking confirmations
- Doctor alerts

### Prescriptions:
- Sample prescriptions with diagnosis
- Medications and instructions

---

## 🎬 Demo Scenario

### Complete Patient Journey:
1. Login as `patient@test.com` / `patient123`
2. Click "Book Appointment"
3. Browse doctors - select "Dr. Michael Brown (Orthopedics)"
4. Choose tomorrow's date
5. Select an available time slot (e.g., 10:00 AM)
6. Enter reason: "Knee pain consultation"
7. Confirm booking
8. View in "My Appointments"
9. Go to "Upload Report"
10. Upload a sample PDF file
11. Check notifications

### Doctor View:
1. Login as `dr.smith@healthcare.com` / `password123`
2. View dashboard
3. See scheduled appointments
4. Check patient details

---

## ✅ Verification Checklist

After loading dummy data, verify:
- [ ] Can see 10 doctors in booking page
- [ ] Different specialties are available
- [ ] Time slots show correctly
- [ ] Can book new appointments
- [ ] Existing appointments are visible
- [ ] Can login as different users
- [ ] Doctor dashboard shows appointments
- [ ] File upload works

---

## 🐛 Troubleshooting

### "Database connection failed"
- Check PostgreSQL is running
- Verify password in `backend/.env`
- Ensure database `healthcare_db` exists

### "No doctors showing"
- Run `npm run load-dummy` again
- Check backend console for errors
- Verify backend is running on port 5000

### "Cannot book appointment"
- Check if date is in the future
- Verify doctor has schedule for that day
- Check backend logs for errors

---

## 📞 Need Help?

Check these files:
- `TEST_CREDENTIALS.md` - All login credentials
- `CURRENT_STATUS.md` - Project status
- `SETUP_GUIDE.md` - Detailed setup
- `README.md` - Complete documentation

---

**You're all set! Start testing with realistic data! 🎉**
