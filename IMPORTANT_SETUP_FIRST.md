# ⚠️ IMPORTANT: Setup PostgreSQL First!

## You need to install PostgreSQL before running this project

### Step 1: Install PostgreSQL

1. Download PostgreSQL from: https://www.postgresql.org/download/windows/
2. Run the installer
3. During installation:
   - Set password for postgres user (remember this!)
   - Keep default port: 5432
   - Install pgAdmin 4 (comes with installer)

### Step 2: Create Database

After installation, open **pgAdmin 4** or **SQL Shell (psql)**:

**Using pgAdmin:**
1. Open pgAdmin 4
2. Connect to PostgreSQL (enter your password)
3. Right-click on "Databases" → Create → Database
4. Name it: `healthcare_db`
5. Click Save

**Using SQL Shell:**
```bash
# When prompted, press Enter for defaults, then enter your password
CREATE DATABASE healthcare_db;
\q
```

### Step 3: Update Backend Configuration

Edit `backend/.env` file and set your PostgreSQL password:
```
DB_PASSWORD=your_postgres_password_here
```

### Step 4: Run Database Migration

```bash
cd backend
npm run migrate
```

You should see:
```
✓ Database migration completed successfully

Sample Login Credentials:
Admin: admin@healthcare.com / admin123
Doctor: dr.smith@healthcare.com / doctor123
Patient: patient@test.com / patient123
```

### Step 5: Start Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

---

## Current Status

✅ Backend is running on http://localhost:5000
❌ PostgreSQL needs to be installed and configured
❌ Database migration needs to be run
❌ Frontend will start after database is ready

## Quick Test

Once everything is running, open http://localhost:3000 and login with:
- Email: patient@test.com
- Password: patient123
