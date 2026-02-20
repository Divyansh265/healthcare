-- Healthcare Appointment System Database Schema
-- Drop existing tables if they exist
DROP TABLE IF EXISTS audit_logs CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;
DROP TABLE IF EXISTS prescriptions CASCADE;
DROP TABLE IF EXISTS medical_reports CASCADE;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS doctor_schedules CASCADE;
DROP TABLE IF EXISTS doctors CASCADE;
DROP TABLE IF EXISTS patients CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (base authentication)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('patient', 'doctor', 'admin')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Patients table
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(20),
    phone VARCHAR(20),
    address TEXT,
    blood_group VARCHAR(5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Doctors table
CREATE TABLE doctors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    specialty VARCHAR(100) NOT NULL,
    qualification VARCHAR(200),
    phone VARCHAR(20),
    consultation_fee DECIMAL(10, 2) DEFAULT 500,
    experience_years INTEGER,
    available BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Doctor availability schedule
CREATE TABLE doctor_schedules (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    slot_duration INTEGER DEFAULT 30,
    is_active BOOLEAN DEFAULT true
);

-- Appointments table
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id UUID REFERENCES patients(id) ON DELETE CASCADE,
    doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled')),
    reason TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(doctor_id, appointment_date, appointment_time)
);

-- Medical reports table
CREATE TABLE medical_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_id UUID REFERENCES patients(id) ON DELETE CASCADE,
    appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    report_type VARCHAR(50),
    report_date DATE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Prescriptions table
CREATE TABLE prescriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    appointment_id UUID REFERENCES appointments(id) ON DELETE CASCADE,
    patient_id UUID REFERENCES patients(id) ON DELETE CASCADE,
    doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE,
    diagnosis TEXT,
    medications TEXT NOT NULL,
    instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Notifications table
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit logs table
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50) NOT NULL,
    resource_id UUID,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data for testing

-- Sample Admin User
INSERT INTO users (email, password_hash, role) VALUES 
('admin@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'admin');
-- Password: admin123

-- Sample Doctors
INSERT INTO users (email, password_hash, role) VALUES 
('dr.smith@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor'),
('dr.jones@healthcare.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'doctor');
-- Password: doctor123

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'John', 'Smith', 'Cardiology', 'MBBS, MD', '+1234567890', 1000, 10 FROM users WHERE email = 'dr.smith@healthcare.com';

INSERT INTO doctors (user_id, first_name, last_name, specialty, qualification, phone, consultation_fee, experience_years) 
SELECT id, 'Sarah', 'Jones', 'Dermatology', 'MBBS, MD', '+1234567891', 800, 8 FROM users WHERE email = 'dr.jones@healthcare.com';

-- Sample Doctor Schedules (Monday to Friday, 9 AM to 5 PM)
INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'John'
UNION ALL
SELECT id, 2, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'John'
UNION ALL
SELECT id, 3, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'John'
UNION ALL
SELECT id, 4, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'John'
UNION ALL
SELECT id, 5, '09:00', '17:00', 30 FROM doctors WHERE first_name = 'John';

INSERT INTO doctor_schedules (doctor_id, day_of_week, start_time, end_time, slot_duration)
SELECT id, 1, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Sarah'
UNION ALL
SELECT id, 2, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Sarah'
UNION ALL
SELECT id, 3, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Sarah'
UNION ALL
SELECT id, 4, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Sarah'
UNION ALL
SELECT id, 5, '10:00', '18:00', 30 FROM doctors WHERE first_name = 'Sarah';

-- Sample Patient
INSERT INTO users (email, password_hash, role) VALUES 
('patient@test.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5GyYIq8Ij7aGW', 'patient');
-- Password: patient123

INSERT INTO patients (user_id, first_name, last_name, date_of_birth, gender, phone, blood_group) 
SELECT id, 'Alice', 'Johnson', '1995-05-15', 'Female', '+1234567892', 'O+' FROM users WHERE email = 'patient@test.com';

-- Create indexes for better performance
CREATE INDEX idx_appointments_patient ON appointments(patient_id);
CREATE INDEX idx_appointments_doctor ON appointments(doctor_id);
CREATE INDEX idx_appointments_date ON appointments(appointment_date);
CREATE INDEX idx_medical_reports_patient ON medical_reports(patient_id);
CREATE INDEX idx_notifications_user ON notifications(user_id);
