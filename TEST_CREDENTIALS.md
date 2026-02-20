# 🔐 Test Credentials & Dummy Data

## Default Password for All Accounts
**Password:** `password123`

---

## 👨‍⚕️ DOCTOR ACCOUNTS (10 Doctors)

### 1. Dr. John Smith - Cardiology
- **Email:** dr.smith@healthcare.com
- **Password:** password123
- **Specialty:** Cardiology
- **Fee:** ₹1000
- **Experience:** 10 years
- **Schedule:** Mon-Fri, 9 AM - 5 PM

### 2. Dr. Sarah Jones - Dermatology
- **Email:** dr.jones@healthcare.com
- **Password:** password123
- **Specialty:** Dermatology
- **Fee:** ₹800
- **Experience:** 8 years
- **Schedule:** Mon-Fri, 10 AM - 6 PM

### 3. Dr. Emily Williams - Pediatrics
- **Email:** dr.williams@healthcare.com
- **Password:** password123
- **Specialty:** Pediatrics
- **Fee:** ₹700
- **Experience:** 12 years
- **Schedule:** Mon-Fri, 8 AM - 4 PM

### 4. Dr. Michael Brown - Orthopedics
- **Email:** dr.brown@healthcare.com
- **Password:** password123
- **Specialty:** Orthopedics
- **Fee:** ₹1200
- **Experience:** 15 years
- **Schedule:** Mon-Sat, 10 AM - 6 PM

### 5. Dr. Jennifer Davis - Neurology
- **Email:** dr.davis@healthcare.com
- **Password:** password123
- **Specialty:** Neurology
- **Fee:** ₹1500
- **Experience:** 18 years
- **Schedule:** Mon, Wed, Fri, 11 AM - 5 PM (45 min slots)

### 6. Dr. Lisa Wilson - Gynecology
- **Email:** dr.wilson@healthcare.com
- **Password:** password123
- **Specialty:** Gynecology
- **Fee:** ₹900
- **Experience:** 10 years
- **Schedule:** Tue, Thu, Sat, 9 AM - 3 PM

### 7. Dr. Robert Taylor - ENT
- **Email:** dr.taylor@healthcare.com
- **Password:** password123
- **Specialty:** ENT
- **Fee:** ₹800
- **Experience:** 9 years
- **Schedule:** Mon-Fri, 9 AM - 5 PM

### 8. Dr. David Anderson - Psychiatry
- **Email:** dr.anderson@healthcare.com
- **Password:** password123
- **Specialty:** Psychiatry
- **Fee:** ₹1100
- **Experience:** 14 years
- **Schedule:** Mon-Fri, 2 PM - 8 PM (60 min slots)

### 9. Dr. Maria Thomas - Ophthalmology
- **Email:** dr.thomas@healthcare.com
- **Password:** password123
- **Specialty:** Ophthalmology
- **Fee:** ₹850
- **Experience:** 11 years
- **Schedule:** Mon-Sat, 10 AM - 4 PM (20 min slots)

### 10. Dr. James Jackson - General Medicine
- **Email:** dr.jackson@healthcare.com
- **Password:** password123
- **Specialty:** General Medicine
- **Fee:** ₹600
- **Experience:** 7 years
- **Schedule:** Mon-Fri, 8 AM - 8 PM

---

## 👥 PATIENT ACCOUNTS (10 Patients)

### 1. Alice Johnson
- **Email:** patient@test.com
- **Password:** patient123
- **DOB:** 1995-05-15
- **Gender:** Female
- **Blood Group:** O+
- **Phone:** +1234567892

### 2. John Doe
- **Email:** john.doe@email.com
- **Password:** password123
- **DOB:** 1988-03-20
- **Gender:** Male
- **Blood Group:** A+
- **Phone:** +1234567801

### 3. Mary Smith
- **Email:** mary.smith@email.com
- **Password:** password123
- **DOB:** 1992-07-15
- **Gender:** Female
- **Blood Group:** B+
- **Phone:** +1234567802

### 4. Robert Wilson
- **Email:** robert.wilson@email.com
- **Password:** password123
- **DOB:** 1985-11-30
- **Gender:** Male
- **Blood Group:** O-
- **Phone:** +1234567803

### 5. Emma Brown
- **Email:** emma.brown@email.com
- **Password:** password123
- **DOB:** 1998-02-14
- **Gender:** Female
- **Blood Group:** AB+
- **Phone:** +1234567804

### 6. David Lee
- **Email:** david.lee@email.com
- **Password:** password123
- **DOB:** 1990-09-08
- **Gender:** Male
- **Blood Group:** A-
- **Phone:** +1234567805

### 7. Sophia Garcia
- **Email:** sophia.garcia@email.com
- **Password:** password123
- **DOB:** 1987-06-25
- **Gender:** Female
- **Blood Group:** B-
- **Phone:** +1234567806

### 8. Michael Martinez
- **Email:** michael.martinez@email.com
- **Password:** password123
- **DOB:** 1993-12-10
- **Gender:** Male
- **Blood Group:** O+
- **Phone:** +1234567807

### 9. Olivia Rodriguez
- **Email:** olivia.rodriguez@email.com
- **Password:** password123
- **DOB:** 1996-04-18
- **Gender:** Female
- **Blood Group:** AB-
- **Phone:** +1234567808

### 10. William Anderson
- **Email:** william.anderson@email.com
- **Password:** password123
- **DOB:** 1989-08-22
- **Gender:** Male
- **Blood Group:** A+
- **Phone:** +1234567809

---

## 👨‍💼 ADMIN ACCOUNT

### Admin User
- **Email:** admin@healthcare.com
- **Password:** admin123
- **Role:** Admin

---

## 📊 Sample Data Included

### Appointments
- **10+ appointments** with mix of:
  - ✅ Scheduled (future dates)
  - ✅ Completed (past dates)
  - ❌ Cancelled

### Notifications
- Appointment reminders
- Booking confirmations
- New appointment alerts for doctors

### Prescriptions
- Sample prescriptions for completed appointments
- Includes diagnosis, medications, and instructions

---

## 🧪 Testing Scenarios

### Scenario 1: Patient Booking Flow
1. Login as: `patient@test.com` / `patient123`
2. Browse doctors by specialty
3. Select a doctor (e.g., Dr. Smith - Cardiology)
4. Choose a future date
5. Select an available time slot
6. Enter reason and confirm booking

### Scenario 2: Doctor View Appointments
1. Login as: `dr.smith@healthcare.com` / `password123`
2. View dashboard
3. See list of scheduled appointments
4. Check patient details

### Scenario 3: Upload Medical Report
1. Login as: `patient@test.com` / `patient123`
2. Go to "Upload Report"
3. Select report type (Lab, X-Ray, etc.)
4. Upload a PDF or image file
5. Add description and submit

### Scenario 4: Cancel Appointment
1. Login as any patient
2. Go to "My Appointments"
3. Find a scheduled appointment
4. Click "Cancel" button
5. Confirm cancellation

### Scenario 5: Multiple Patients Testing
- Use different patient accounts to book with different doctors
- Test various specialties
- Book on different dates and times

---

## 📅 Doctor Availability Summary

| Doctor | Specialty | Days | Hours | Slot Duration |
|--------|-----------|------|-------|---------------|
| Dr. Smith | Cardiology | Mon-Fri | 9 AM - 5 PM | 30 min |
| Dr. Jones | Dermatology | Mon-Fri | 10 AM - 6 PM | 30 min |
| Dr. Williams | Pediatrics | Mon-Fri | 8 AM - 4 PM | 30 min |
| Dr. Brown | Orthopedics | Mon-Sat | 10 AM - 6 PM | 30 min |
| Dr. Davis | Neurology | Mon, Wed, Fri | 11 AM - 5 PM | 45 min |
| Dr. Wilson | Gynecology | Tue, Thu, Sat | 9 AM - 3 PM | 30 min |
| Dr. Taylor | ENT | Mon-Fri | 9 AM - 5 PM | 30 min |
| Dr. Anderson | Psychiatry | Mon-Fri | 2 PM - 8 PM | 60 min |
| Dr. Thomas | Ophthalmology | Mon-Sat | 10 AM - 4 PM | 20 min |
| Dr. Jackson | General Medicine | Mon-Fri | 8 AM - 8 PM | 30 min |

---

## 🔄 How to Load Dummy Data

### After running the main migration:

```bash
# Navigate to backend
cd backend

# Run the dummy data script
psql -U postgres -d healthcare_db -f database/dummy-data.sql
```

### Or using pgAdmin:
1. Open pgAdmin
2. Connect to healthcare_db
3. Open Query Tool
4. Load `backend/database/dummy-data.sql`
5. Execute the script

---

## ✅ What You Get

After loading dummy data:
- ✅ 10 Doctors across different specialties
- ✅ 10 Patients with complete profiles
- ✅ 1 Admin account
- ✅ 10+ Sample appointments
- ✅ Doctor schedules for all doctors
- ✅ Sample notifications
- ✅ Sample prescriptions
- ✅ Ready-to-test system!

---

## 🎯 Quick Test Checklist

- [ ] Login as patient
- [ ] Browse doctors
- [ ] Book an appointment
- [ ] View appointments
- [ ] Upload a report
- [ ] Cancel an appointment
- [ ] Login as doctor
- [ ] View patient appointments
- [ ] Check different specialties
- [ ] Test different time slots

---

**All accounts use password: `password123`**
**Except Alice Johnson (first patient): `patient123`**
**Admin account: `admin123`**
