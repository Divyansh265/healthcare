const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Password hash for "password123"
const passwordHash = '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW';

// Initialize data
const initData = async () => {
  console.log('Initializing dummy data...\n');

  // Users
  const users = [
    // Admin
    { id: '1', email: 'admin@healthcare.com', password_hash: passwordHash, role: 'admin', is_active: true, created_at: new Date().toISOString() },
    
    // Doctors
    { id: '2', email: 'dr.smith@healthcare.com', password_hash: passwordHash, role: 'doctor', is_active: true, created_at: new Date().toISOString() },
    { id: '3', email: 'dr.jones@healthcare.com', password_hash: passwordHash, role: 'doctor', is_active: true, created_at: new Date().toISOString() },
    { id: '4', email: 'dr.williams@healthcare.com', password_hash: passwordHash, role: 'doctor', is_active: true, created_at: new Date().toISOString() },
    { id: '5', email: 'dr.brown@healthcare.com', password_hash: passwordHash, role: 'doctor', is_active: true, created_at: new Date().toISOString() },
    { id: '6', email: 'dr.davis@healthcare.com', password_hash: passwordHash, role: 'doctor', is_active: true, created_at: new Date().toISOString() },
    
    // Patients
    { id: '7', email: 'patient@test.com', password_hash: await bcrypt.hash('patient123', 12), role: 'patient', is_active: true, created_at: new Date().toISOString() },
    { id: '8', email: 'john.doe@email.com', password_hash: passwordHash, role: 'patient', is_active: true, created_at: new Date().toISOString() },
    { id: '9', email: 'mary.smith@email.com', password_hash: passwordHash, role: 'patient', is_active: true, created_at: new Date().toISOString() },
    { id: '10', email: 'robert.wilson@email.com', password_hash: passwordHash, role: 'patient', is_active: true, created_at: new Date().toISOString() },
    { id: '11', email: 'emma.brown@email.com', password_hash: passwordHash, role: 'patient', is_active: true, created_at: new Date().toISOString() }
  ];

  // Doctors
  const doctors = [
    { id: 'd1', user_id: '2', first_name: 'John', last_name: 'Smith', specialty: 'Cardiology', qualification: 'MBBS, MD', phone: '+1234567890', consultation_fee: 1000, experience_years: 10, available: true, created_at: new Date().toISOString() },
    { id: 'd2', user_id: '3', first_name: 'Sarah', last_name: 'Jones', specialty: 'Dermatology', qualification: 'MBBS, MD', phone: '+1234567891', consultation_fee: 800, experience_years: 8, available: true, created_at: new Date().toISOString() },
    { id: 'd3', user_id: '4', first_name: 'Emily', last_name: 'Williams', specialty: 'Pediatrics', qualification: 'MBBS, MD (Pediatrics)', phone: '+1234567893', consultation_fee: 700, experience_years: 12, available: true, created_at: new Date().toISOString() },
    { id: 'd4', user_id: '5', first_name: 'Michael', last_name: 'Brown', specialty: 'Orthopedics', qualification: 'MBBS, MS (Ortho)', phone: '+1234567894', consultation_fee: 1200, experience_years: 15, available: true, created_at: new Date().toISOString() },
    { id: 'd5', user_id: '6', first_name: 'Jennifer', last_name: 'Davis', specialty: 'Neurology', qualification: 'MBBS, DM (Neurology)', phone: '+1234567895', consultation_fee: 1500, experience_years: 18, available: true, created_at: new Date().toISOString() }
  ];

  // Patients
  const patients = [
    { id: 'p1', user_id: '7', first_name: 'Alice', last_name: 'Johnson', date_of_birth: '1995-05-15', gender: 'Female', phone: '+1234567892', blood_group: 'O+', created_at: new Date().toISOString() },
    { id: 'p2', user_id: '8', first_name: 'John', last_name: 'Doe', date_of_birth: '1988-03-20', gender: 'Male', phone: '+1234567801', blood_group: 'A+', created_at: new Date().toISOString() },
    { id: 'p3', user_id: '9', first_name: 'Mary', last_name: 'Smith', date_of_birth: '1992-07-15', gender: 'Female', phone: '+1234567802', blood_group: 'B+', created_at: new Date().toISOString() },
    { id: 'p4', user_id: '10', first_name: 'Robert', last_name: 'Wilson', date_of_birth: '1985-11-30', gender: 'Male', phone: '+1234567803', blood_group: 'O-', created_at: new Date().toISOString() },
    { id: 'p5', user_id: '11', first_name: 'Emma', last_name: 'Brown', date_of_birth: '1998-02-14', gender: 'Female', phone: '+1234567804', blood_group: 'AB+', created_at: new Date().toISOString() }
  ];

  // Sample appointments
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const appointments = [
    { id: 'a1', patient_id: 'p1', doctor_id: 'd1', appointment_date: tomorrow.toISOString().split('T')[0], appointment_time: '10:00', status: 'scheduled', reason: 'Regular checkup', created_at: new Date().toISOString() },
    { id: 'a2', patient_id: 'p2', doctor_id: 'd3', appointment_date: dayAfter.toISOString().split('T')[0], appointment_time: '09:00', status: 'scheduled', reason: 'Child vaccination', created_at: new Date().toISOString() },
    { id: 'a3', patient_id: 'p3', doctor_id: 'd2', appointment_date: tomorrow.toISOString().split('T')[0], appointment_time: '11:00', status: 'scheduled', reason: 'Skin rash consultation', created_at: new Date().toISOString() },
    { id: 'a4', patient_id: 'p1', doctor_id: 'd1', appointment_date: yesterday.toISOString().split('T')[0], appointment_time: '10:00', status: 'completed', reason: 'Follow-up consultation', created_at: new Date().toISOString() }
  ];

  // Write data to files
  fs.writeFileSync(path.join(dataDir, 'users.json'), JSON.stringify(users, null, 2));
  fs.writeFileSync(path.join(dataDir, 'doctors.json'), JSON.stringify(doctors, null, 2));
  fs.writeFileSync(path.join(dataDir, 'patients.json'), JSON.stringify(patients, null, 2));
  fs.writeFileSync(path.join(dataDir, 'appointments.json'), JSON.stringify(appointments, null, 2));
  fs.writeFileSync(path.join(dataDir, 'reports.json'), JSON.stringify([], null, 2));

  console.log('✓ Dummy data initialized successfully!\n');
  console.log('📊 Summary:');
  console.log(`- Users: ${users.length}`);
  console.log(`- Doctors: ${doctors.length}`);
  console.log(`- Patients: ${patients.length}`);
  console.log(`- Appointments: ${appointments.length}\n`);
  
  console.log('🔐 Test Credentials:');
  console.log('Patient: patient@test.com / patient123');
  console.log('Doctor: dr.smith@healthcare.com / password123');
  console.log('Admin: admin@healthcare.com / password123\n');
  
  console.log('All other accounts use password: password123\n');
};

initData().catch(console.error);
