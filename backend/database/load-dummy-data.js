const fs = require('fs');
const path = require('path');
const pool = require('../config/database');

const loadDummyData = async () => {
  try {
    console.log('Loading dummy data...');
    
    const dummyDataPath = path.join(__dirname, 'dummy-data.sql');
    const dummyData = fs.readFileSync(dummyDataPath, 'utf8');
    
    await pool.query(dummyData);
    
    console.log('✓ Dummy data loaded successfully!');
    console.log('\n📊 Summary:');
    
    // Get counts
    const users = await pool.query('SELECT COUNT(*) FROM users');
    const doctors = await pool.query('SELECT COUNT(*) FROM doctors');
    const patients = await pool.query('SELECT COUNT(*) FROM patients');
    const appointments = await pool.query('SELECT COUNT(*) FROM appointments');
    const schedules = await pool.query('SELECT COUNT(*) FROM doctor_schedules');
    
    console.log(`- Total Users: ${users.rows[0].count}`);
    console.log(`- Total Doctors: ${doctors.rows[0].count}`);
    console.log(`- Total Patients: ${patients.rows[0].count}`);
    console.log(`- Total Appointments: ${appointments.rows[0].count}`);
    console.log(`- Total Schedules: ${schedules.rows[0].count}`);
    
    console.log('\n🔐 Test Credentials:');
    console.log('Patient: patient@test.com / patient123');
    console.log('Doctor: dr.smith@healthcare.com / password123');
    console.log('Admin: admin@healthcare.com / admin123');
    console.log('\nSee TEST_CREDENTIALS.md for all accounts!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error loading dummy data:', error);
    process.exit(1);
  }
};

loadDummyData();
