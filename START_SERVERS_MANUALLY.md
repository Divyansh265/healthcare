# 🚀 How to Start the Servers Manually

## Current Status

✅ **Backend is RUNNING** on http://localhost:5000
❌ **Frontend has dependency issues** - needs manual start

## Issue

The React Scripts version has a configuration conflict. Here's how to fix it:

## Solution: Start Frontend Manually

### Option 1: Open Two Separate Terminals

**Terminal 1 - Backend (Already Running):**
```bash
cd backend
npm run dev
```
✅ This is already running!

**Terminal 2 - Frontend:**
```bash
cd frontend
set SKIP_PREFLIGHT_CHECK=true && npm start
```

### Option 2: Use PowerShell

**Terminal 1 - Backend:**
```powershell
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```powershell
cd frontend
$env:SKIP_PREFLIGHT_CHECK='true'
npm start
```

### Option 3: Fix and Restart

If the above doesn't work, try this:

```bash
cd frontend
npm install react-scripts@4.0.3 --save --legacy-peer-deps
npm start
```

## What Should Happen

When frontend starts successfully, you'll see:
```
Compiled successfully!

You can now view healthcare-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

## Test the Application

1. Open http://localhost:3000 in your browser
2. You should see the login page
3. Login with test credentials:
   - **Patient**: patient@test.com / patient123
   - **Doctor**: dr.smith@healthcare.com / doctor123

## Important Notes

⚠️ **PostgreSQL Must Be Installed First!**

If you haven't installed PostgreSQL yet:
1. See `IMPORTANT_SETUP_FIRST.md`
2. Install PostgreSQL
3. Create database: `healthcare_db`
4. Run migration: `cd backend && npm run migrate`

## Troubleshooting

### Backend Issues
- Check if PostgreSQL is running
- Verify database exists
- Check `.env` file has correct password

### Frontend Issues
- Delete `node_modules` and `package-lock.json`
- Run `npm install --legacy-peer-deps`
- Try `npm start` again

### Port Already in Use
- Backend (5000): Change PORT in `backend/.env`
- Frontend (3000): React will ask to use 3001, type 'Y'

## Quick Commands Reference

```bash
# Check if servers are running
netstat -ano | findstr :5000    # Backend
netstat -ano | findstr :3000    # Frontend

# Kill process on port (if needed)
# Find PID from above command, then:
taskkill /PID <PID> /F
```

---

**Current Backend Status:** ✅ Running on http://localhost:5000
**Next Step:** Start frontend manually using one of the options above
